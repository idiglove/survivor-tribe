import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import AirTable from "@/assets/icons/airtable-icon-original.svg";
import Amazon from "@/assets/icons/amazon-icon-original.svg";
import Box from "@/assets/icons/Box.svg";
import Bytedance from "@/assets/icons/bytedance_logo_icon.svg";
import Chase from "@/assets/icons/chase-icon-original.svg";
import Cloudebees from "@/assets/icons/CloudBees-logo.svg";

const TopNavBar = () => {
  return (
    <div className="h-1.5 w-full max-w-[200px] md:max-w-[100%] mx-auto py-6 flex flex-col md:flex-wrap gap-4 justify-center bg-white">
      <Button variant="link">
        <Image src={AirTable} alt="Airtable icon" width={24} />
        <Link className="uppercase" href="#">
          Airtable
        </Link>
      </Button>
      <Button variant="link">
        <Image src={Amazon} alt="Amazon icon" width={24} />
        <Link className="uppercase" href="#">
          Amazon
        </Link>
      </Button>
      <Button variant="link">
        <Image src={Box} alt="Box icon" width={24} />
        <Link className="uppercase" href="#">
          Box
        </Link>
      </Button>
      <Button variant="link">
        <Image src={Bytedance} alt="ByteDance icon" width={24} />
        <Link className="uppercase" href="#">
          ByteDance
        </Link>
      </Button>
      <Button variant="link">
        <Image src={Chase} alt="Chase icon" width={24} />
        <Link className="uppercase" href="#">
          Chase
        </Link>
      </Button>
      <Button variant="link">
        <Image src={Cloudebees} alt="Cloudebees icon" width={24} />
        <Link className="uppercase" href="#">
          Cloudebees
        </Link>
      </Button>
    </div>
  );
};

export default TopNavBar;
