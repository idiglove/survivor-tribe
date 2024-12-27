import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import PostHogProvider from "@/shared/components/posthog-provider";
import { Toaster } from "@/shared/components/ui/toaster";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Survivor Tribe - The ultimate Survivor Fan Community",
  description: "Get Survivor Cast Updates about Survivor Season 47 and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body className={`antialiased ${ubuntu.className}`}>
          <>
            {children}
            <Toaster />
          </>
        </body>
      </PostHogProvider>
    </html>
  );
}
