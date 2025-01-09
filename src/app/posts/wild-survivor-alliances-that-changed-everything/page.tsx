import OtherNavbar from "@/shared/components/other-navbar";
import Post from "./markdown/index.mdx";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wild Survivor Alliances That Changed Everything",
  description:
    "Discover the wild Survivor alliances that changed everything, from Tagi to Cops R Us, and how they shaped game history.",
};

export default function Page() {
  return (
    <>
      <main>
        <OtherNavbar />
        <div className="w-full max-w-[900px] mx-auto px-4 flex flex-col gap-4 items-center">
          <Image
            src="/posts/alliance.webp"
            alt="Wild Alliances"
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
