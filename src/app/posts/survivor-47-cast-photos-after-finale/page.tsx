import OtherNavbar from "@/shared/components/other-navbar";
import Post from "./markdown/index.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survivor 47 cast photos after the Finale - Survivor Tribe",
  description:
    "Meet the Survivor 47 cast and see their photos after the finale.",
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
