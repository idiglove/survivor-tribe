import ComingSoon from "@/features/coming-soon/components";
import { SocialMediaPostSeason } from "@/features/social-media/components/post-season";
import HomepageHeader from "@/shared/components/homepage/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survivor Tribe - Reality Game Show Fan Site",
  description: "Get all updates about our favorite reality game show here!",
};

export default function Home() {
  return (
    <>
      <main>
        <HomepageHeader />

        <div className="w-full max-w-[900px] mx-auto">
          <SocialMediaPostSeason />
          <ComingSoon />
        </div>
      </main>
      <footer className="py-5">
        <div className="w-full max-w-[900px] mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Survivor Tribe. All Rights
            Reserved.
          </p>
          <p className="text-sm">
            This is a Survivor fan site and is not affiliated with Survior or CBS.
          </p>
        </div>
      </footer>
    </>
  );
}
