import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/survivor-tribe-logo.png";

export default async function PodcastSummary({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const DynamicSummary = dynamic(
    () =>
      import(`@/features/podcast-summaries/components/content/${slug}`).catch(
        (error) => {
          console.error("Module not found:", error);
          return () => (
            <div className="text-center font-bold text-5xl">
              Page is not found.
            </div>
          );
        }
      ),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <>
      <main>
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5">
          <Link href="/">
            <Image src={Logo} alt="Survivor Tribe Logo" width={400} />
          </Link>
        </div>
        <div className="w-full max-w-[900px] mx-auto px-4">
          <DynamicSummary />
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
