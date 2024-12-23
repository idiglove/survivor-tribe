import ComingSoon from "@/features/coming-soon/components";
import ShopGallery from "@/features/merch/components/shop-gallery";
import { SocialMediaPostSeason } from "@/features/social-media/components/post-season";
import HomepageHeader from "@/shared/components/homepage/header";

export default function Home() {
  return (
    <>
      <main>
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
    </>
  );
}
