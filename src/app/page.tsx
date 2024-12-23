import ComingSoon from "@/features/coming-soon/components";
import ShopGallery from "@/features/merch/components/shop-gallery";
import { SocialMediaPostSeason } from "@/features/social-media/components/post-season";
import HomepageHeader from "@/shared/components/homepage/header";
import PostHogProvider from "@/shared/components/posthog-provider";

export default function Home() {
  return (
    <PostHogProvider>
      <main>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <HomepageHeader />

        <div className="w-full max-w-[900px] mx-auto px-4">
          <SocialMediaPostSeason />
          <ShopGallery />
          <ComingSoon />
        </div>
      </main>
      <footer className="p-5">
        <div className="w-full max-w-[900px] mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Survivor Tribe. All Rights
            Reserved.
          </p>
          <p className="text-sm">
            This is a Survivor fan site and is not affiliated with Survior or
            CBS.
          </p>
        </div>
      </footer>
    </PostHogProvider>
  );
}
