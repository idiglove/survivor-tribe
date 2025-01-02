import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/survivor-tribe-logo.png";
import { Button } from "@/shared/components/ui/button";

const OtherNavbar = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5">
      <Link href="/">
        <Image src={Logo} alt="Survivor Tribe Logo" width={400} />
      </Link>
      <Button variant="secondary">
        <a href="https://discord.gg/C5dTyfnt8R" target="__blank">
          Join our Discord Server!
        </a>
      </Button>
    </div>
  );
};

export default OtherNavbar;
