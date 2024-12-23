import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import PostHogProvider from "@/shared/components/posthog-provider";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

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
      <PostHogProvider>
        <body className={`antialiased ${ubuntu.className}`}>{children}</body>
      </PostHogProvider>
    </html>
  );
}
