import ComingSoon from "@/features/coming-soon/components";
import ShopGallery from "@/features/merch/components/shop-gallery";
import { SocialMediaPostSeason } from "@/features/social-media/components/post-season";
import WebUpdates from "@/features/web-updates/components";
import HomepageHeader from "@/shared/components/homepage/header";
import PodcastSummaryHomepage from "@/shared/components/homepage/podcast-summary";

export default function Home() {
  return (
    <>
      <main>
        <HomepageHeader />

        <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row gap-16">
          <div className="w-full sm:w-[60%] md:w-[80%]">
            <SocialMediaPostSeason />
            <ShopGallery />
            <PodcastSummaryHomepage />
            <ComingSoon />
          </div>
          <div className="w-full top-0 sticky h-[500px]">
            <WebUpdates />
          </div>
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
    </>
  );
}
