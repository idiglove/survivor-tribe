import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survivor Tribe - Reality Game Show Fan Site",
  description: "Get all updates about our favorite reality game show here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
