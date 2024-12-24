import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/survivor-tribe-logo.png";
import Navbar from "../../navbar";

const HomepageHeader = () => {
  return (
    <header className="text-center">
      <Navbar />
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5">
        <Link href="/">
          <Image src={Logo} alt="Survivor Tribe Logo" width={400} />
        </Link>
        <h3 className="font-bold">Get all updates about Survivor Season 47 and upcoming seasons!</h3>
        <h4>Be a part of the ultimate Survivor Fan Community</h4>
      </div>
    </header>
  );
};

export default HomepageHeader;
