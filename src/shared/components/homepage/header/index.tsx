import Image from "next/image";
import Logo from "@/assets/survivor-tribe-logo.png";
import Navbar from "../../navbar";

const HomepageHeader = () => {
  return (
    <header className="text-center">
      <Navbar />
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5">
        <Image src={Logo} alt="Survivor Tribe Logo" width={400} />
        <h3>Get all updates about our favorite reality game show here!</h3>
      </div>
    </header>
  );
};

export default HomepageHeader;
