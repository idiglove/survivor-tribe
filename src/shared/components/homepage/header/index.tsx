import Image from "next/image";
import ScrollButton from "../../scroll-button";
import {
  COMING_SOON_ELEMENT_ID,
  POST_SEASON_PHOTOS_ELEMENT_ID,
  SURVIVOR_MERCH,
} from "@/shared/constants";
import ModalButton from "../../modal-button";
import Logo from "@/assets/survivor-tribe-logo.png";

const HomepageHeader = () => {
  return (
    <header className="text-center">
      <div className="w-full max-w-[200px] md:max-w-[900px] mx-auto my-4 flex flex-col md:flex-row gap-4 justify-center">
        <ModalButton
          text="Who we are"
          dialogTitle="About the site creator"
          dialogDescription="I'm a Survivor fan who is dedicated to providing you with the latest updates on the show."
          dialogContent={
            <div>
              <p>
                For those willing to contribute to this fan site, hit me up on
                Discord: lithia777
              </p>
            </div>
          }
        />
        <ScrollButton
          text="Post Season Photos"
          elementId={POST_SEASON_PHOTOS_ELEMENT_ID}
        />
        <ScrollButton
          text="Survivor Merch"
          elementId={SURVIVOR_MERCH}
        />        
        <ScrollButton
          text="Coming Soon Features"
          elementId={COMING_SOON_ELEMENT_ID}
        />
      </div>
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-5">
        <Image src={Logo} alt="Survivor Tribe Logo" width={400} />
        <h3>Get all updates about our favorite reality game show here!</h3>
      </div>
    </header>
  );
};

export default HomepageHeader;
