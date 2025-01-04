import DebatesThread from "@/features/debates-thread";
import OtherNavbar from "@/shared/components/other-navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit your Survivor Fan Theories - Survivor Tribe",
  description: "Send your Survivor Fan Theories and debate with others",
};

export default async function DebatesPage() {
  return (
    <>
      <main>
        <OtherNavbar />
        <div className="w-full max-w-[900px] mx-auto px-4">
          <DebatesThread />
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
