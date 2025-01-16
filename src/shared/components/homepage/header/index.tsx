import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/assets/jeff_probst.png";
/* import Navbar from "../../navbar"; */
import { Button } from "../../ui/button";
import TopNavBar from "../../top-sticky-navbar";

const HomepageHeader = () => {
  return (
    <header className="text-center">
      <TopNavBar />
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#402E321F]">
            <p className="text-[#402E32] text-6xl font-bold">survivor tribe</p>
            <p className="text-3xl text-white font-semibold">
              Be a part of the ultimate Survivor Fan Site
            </p>
          </div>
          <div>
            <Image src={HeroImg} alt="Jeff Probst" width={400} />
          </div>
        </div>

        <Button variant="secondary">
          <a href="https://discord.gg/C5dTyfnt8R" target="__blank">
            Join our Discord Server!
          </a>
        </Button>
      </div>
    </header>
  );
};

export default HomepageHeader;
