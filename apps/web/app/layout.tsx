import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Intelligent Travel",
  description:
    "Editorial intelligence for leisure, hospitality, food, drink, travel, and meaningful time."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

