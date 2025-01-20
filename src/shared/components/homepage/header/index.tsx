import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/assets/jeff_probst.png";
import VisitorCounter from "../../visitor-counter/VisitorCounter";
import { Button } from "../../ui/button";
import Navbar from "../../navbar";

const HomepageHeader = () => {
  return (
    <header className="text-center">
      <VisitorCounter />
      {/* <div className="w-full flex flex-col items-center justify-center gap-5 bg-homepage h-dvh object-center absolute"></div> */}
      <div className="bg-homepage bg-repeat bg-cover bg-center h-screen">
        <div className="flex flex-wrap-reverse items-center justify-center pt-20">
          <div className="outline outline-1 outline-white bg-amber-950 m-10 p-10 w-1/3 bg-opacity-10 rounded">
            <div className="bg-cardNoBg text-start relative">
              <div className="relative z-10">
                <p className="text-brown-foreground text-6xl font-bold text-amber-950">
                  survivor tribe
                </p>
                <p className="text-3xl text-white font-semibold">
                  Be a part of the ultimate Survivor Fan Site
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={HeroImg} alt="Jeff Probst" width={531} />
          </div>
        </div>

        {/* Primary container with navbar and carousel */}
        <div className="bg-white h-96 container w-2/3">
          <Button variant="secondary">
            <a href="https://discord.gg/C5dTyfnt8R" target="__blank">
              Join our Discord Server!
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
