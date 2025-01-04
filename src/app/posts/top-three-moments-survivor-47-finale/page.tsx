import OtherNavbar from "@/shared/components/other-navbar";
import Post from "./markdown/index.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Moments from Survivor 47 Finale - Survivor Tribe",
  description:
    "Explore the thrilling finale of Survivor 47. Did the fire making challenge steal the show?",
};

export default function Page() {
  return (
    <>
      <main>
        <OtherNavbar />
        <div className="w-full max-w-[900px] mx-auto px-4 flex flex-col gap-4">
          <Post />
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
