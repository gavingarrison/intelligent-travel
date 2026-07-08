-- Foundational canonical schema sketch.
-- This is intentionally platform-level SQL, not an MVP migration.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TYPE entity_type AS ENUM (
  'hotel',
  'hotel_room',
  'restaurant',
  'coffee_shop',
  'boba_shop',
  'bakery',
  'bar',
  'winery',
  'brewery',
  'museum',
  'experience',
  'park',
  'trail',
  'neighborhood',
  'city',
  'region',
  'road_trip',
  'article',
  'guide',
  'itinerary',
  'person',
  'brand',
  'wine_producer',
  'wine_bottle',
  'varietal',
  'event',
  'season',
  'transportation',
  'airport',
  'viewpoint',
  'vertical',
  'vertical_category',
  'photo_asset',
  'video_asset',
  'map',
  'editorial_collection',
  'halo_experience',
  'user_profile',
  'taste_profile',
  'partner_relationship',
  'sponsor',
  'booking',
  'affiliate_link'
);

CREATE TYPE publication_state AS ENUM (
  'draft',
  'in_review',
  'fact_check',
  'approved',
  'scheduled',
  'published',
  'needs_reverification',
  'archived',
  'retired'
);

CREATE TYPE visibility AS ENUM (
  'private',
  'internal',
  'partner',
  'public'
);

CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type entity_type NOT NULL,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  summary_public TEXT,
  notes_private TEXT,
  metadata JSONB NOT NULL DEFAULT '{}',
  state publication_state NOT NULL DEFAULT 'draft',
  visibility visibility NOT NULL DEFAULT 'private',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (type, slug)
);

CREATE TABLE entity_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  version_number INTEGER NOT NULL,
  snapshot JSONB NOT NULL,
  changed_by UUID,
  change_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (entity_id, version_number)
);

CREATE TABLE geographies (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  parent_entity_id UUID REFERENCES entities(id),
  timezone TEXT,
  boundary GEOGRAPHY,
  centroid GEOGRAPHY(Point, 4326),
  climate_notes TEXT
);

CREATE TABLE verticals (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  parent_vertical_entity_id UUID REFERENCES entities(id),
  editorial_definition TEXT,
  inclusion_rules TEXT,
  evaluation_methodology TEXT,
  related_score_types JSONB NOT NULL DEFAULT '[]',
  related_entity_types JSONB NOT NULL DEFAULT '[]'
);

CREATE TABLE entity_verticals (
  entity_id UUID NOT NULL REFERENCES entities(id),
  vertical_entity_id UUID NOT NULL REFERENCES entities(id),
  relationship_note TEXT,
  primary_vertical BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (entity_id, vertical_entity_id)
);

CREATE TABLE places (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  geography_entity_id UUID REFERENCES entities(id),
  brand_entity_id UUID REFERENCES entities(id),
  address TEXT,
  location GEOGRAPHY(Point, 4326),
  phone TEXT,
  website_url TEXT,
  price_band TEXT,
  hours JSONB NOT NULL DEFAULT '{}',
  reservation_policy TEXT,
  child_policy TEXT,
  pet_policy TEXT,
  accessibility JSONB NOT NULL DEFAULT '{}',
  parking TEXT,
  noise_level TEXT,
  crowd_level TEXT,
  walkability TEXT,
  weather_dependency TEXT
);

CREATE TABLE hotel_rooms (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  hotel_entity_id UUID NOT NULL REFERENCES entities(id),
  room_type TEXT,
  sleeps INTEGER,
  bedrooms NUMERIC(4, 1),
  bathrooms NUMERIC(4, 1),
  crib_available BOOLEAN,
  connecting_room_available BOOLEAN,
  notes TEXT
);

CREATE TABLE content_items (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  title TEXT NOT NULL,
  deck TEXT,
  body_rich JSONB NOT NULL DEFAULT '{}',
  canonical_url TEXT,
  seo_title TEXT,
  seo_description TEXT,
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ
);

CREATE TABLE content_authors (
  content_entity_id UUID NOT NULL REFERENCES entities(id),
  person_entity_id UUID NOT NULL REFERENCES entities(id),
  role TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (content_entity_id, person_entity_id, role)
);

CREATE TABLE media_assets (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  storage_key TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  duration_seconds NUMERIC(10, 3),
  alt_text TEXT,
  caption TEXT,
  credit TEXT,
  rights_status TEXT,
  captured_at TIMESTAMPTZ,
  location GEOGRAPHY(Point, 4326)
);

CREATE TABLE relationships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_entity_id UUID NOT NULL REFERENCES entities(id),
  target_entity_id UUID NOT NULL REFERENCES entities(id),
  relationship_type TEXT NOT NULL,
  strength NUMERIC(6, 3),
  context JSONB NOT NULL DEFAULT '{}',
  evidence TEXT,
  visibility visibility NOT NULL DEFAULT 'internal',
  valid_from TIMESTAMPTZ,
  valid_through TIMESTAMPTZ,
  created_by UUID,
  verified_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source_entity_id, target_entity_id, relationship_type, context)
);

CREATE TABLE scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  score_type TEXT NOT NULL,
  value NUMERIC(8, 3),
  scale TEXT NOT NULL,
  label TEXT,
  rationale TEXT,
  methodology_version TEXT NOT NULL,
  reviewer_entity_id UUID REFERENCES entities(id),
  confidence NUMERIC(5, 2),
  evidence JSONB NOT NULL DEFAULT '{}',
  visibility visibility NOT NULL DEFAULT 'internal',
  valid_from TIMESTAMPTZ,
  valid_through TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  recommended_entity_id UUID NOT NULL REFERENCES entities(id),
  recommendation_type TEXT NOT NULL,
  verdict TEXT NOT NULL,
  audience_context JSONB NOT NULL DEFAULT '{}',
  rationale_public TEXT,
  caveats_public TEXT,
  rationale_private TEXT,
  confidence_score NUMERIC(5, 2),
  verification_status TEXT NOT NULL,
  last_verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE itineraries (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  destination_entity_id UUID REFERENCES entities(id),
  duration_days NUMERIC(5, 2),
  pace TEXT,
  audience_context JSONB NOT NULL DEFAULT '{}',
  season_context JSONB NOT NULL DEFAULT '{}'
);

CREATE TABLE itinerary_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  itinerary_entity_id UUID NOT NULL REFERENCES entities(id),
  referenced_entity_id UUID REFERENCES entities(id),
  day_number INTEGER,
  start_time TIME,
  end_time TIME,
  title TEXT NOT NULL,
  description TEXT,
  notes_private TEXT,
  display_order INTEGER NOT NULL
);

CREATE TABLE user_profiles (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  auth_subject TEXT UNIQUE,
  email TEXT,
  display_name TEXT,
  privacy_settings JSONB NOT NULL DEFAULT '{}',
  family_context JSONB NOT NULL DEFAULT '{}'
);

CREATE TABLE taste_profiles (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  user_profile_entity_id UUID REFERENCES entities(id),
  preference_vector JSONB NOT NULL DEFAULT '{}',
  disliked_attributes JSONB NOT NULL DEFAULT '[]',
  budget_sensitivity TEXT,
  pace_preference TEXT,
  luxury_preference TEXT,
  child_age_context JSONB NOT NULL DEFAULT '[]'
);

CREATE TABLE commerce_links (
  entity_id UUID PRIMARY KEY REFERENCES entities(id),
  related_entity_id UUID NOT NULL REFERENCES entities(id),
  provider TEXT NOT NULL,
  url TEXT NOT NULL,
  disclosure_text TEXT,
  campaign TEXT,
  commission_model TEXT,
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,
  status TEXT NOT NULL
);

CREATE TABLE embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL REFERENCES entities(id),
  content_hash TEXT NOT NULL,
  embedding_model TEXT NOT NULL,
  embedding vector(1536) NOT NULL,
  source_text TEXT NOT NULL,
  source_fields JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (entity_id, content_hash, embedding_model)
);

CREATE TABLE outbox_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  aggregate_type TEXT NOT NULL,
  aggregate_id UUID NOT NULL,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  processed_at TIMESTAMPTZ
);

CREATE INDEX idx_entities_type_state ON entities(type, state);
CREATE INDEX idx_entities_metadata_gin ON entities USING GIN (metadata);
CREATE INDEX idx_entity_verticals_vertical ON entity_verticals(vertical_entity_id);
CREATE INDEX idx_places_location ON places USING GIST (location);
CREATE INDEX idx_relationships_source ON relationships(source_entity_id, relationship_type);
CREATE INDEX idx_relationships_target ON relationships(target_entity_id, relationship_type);
CREATE INDEX idx_scores_entity_type ON scores(entity_id, score_type);
CREATE INDEX idx_embeddings_vector ON embeddings USING hnsw (embedding vector_cosine_ops);
CREATE INDEX idx_outbox_unprocessed ON outbox_events(created_at) WHERE processed_at IS NULL;
