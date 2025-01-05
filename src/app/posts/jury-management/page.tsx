import OtherNavbar from "@/shared/components/other-navbar";
import Post from "./markdown/index.mdx";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How Jury Management Impacts Survivor's Million-Dollar Vote",
  description:
    "See how Survivor players navigate through jury management and dynamics",
};

export default function Page() {
  return (
    <>
      <main>
        <OtherNavbar />
        <div className="w-full max-w-[900px] mx-auto px-4 flex flex-col gap-4 items-center">
          <Image
            src="/posts/jury.png"
            alt="Jury Management"
            width={400}
            height={400}
          />
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
