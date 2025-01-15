import ComingSoon from "@/features/coming-soon/components";
import ShopGallery from "@/features/merch/components/shop-gallery";
import { SocialMediaPostSeason } from "@/features/social-media/components/post-season";
import WatchParamount from "@/features/watch-paramount/components/homepage";
import WebUpdates from "@/features/web-updates/components";
import ArticlesHomepage from "@/shared/components/homepage/articles";
import HomepageHeader from "@/shared/components/homepage/header";
import PodcastSummaryHomepage from "@/shared/components/homepage/podcast-summary";
import VisitorCounter from "@/shared/components/visitor-counter/VisitorCounter";

export default function Home() {
  return (
    <>
        <VisitorCounter />
      <main>
        <HomepageHeader />
        <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row gap-15">
          <div className="w-full sm:w-[60%] md:w-[80%]">
            <SocialMediaPostSeason />
            <ArticlesHomepage />
            <WatchParamount />
            <ShopGallery />
            <PodcastSummaryHomepage />
            <ComingSoon />
          </div>
          <div className="w-full top-0 sticky">
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
