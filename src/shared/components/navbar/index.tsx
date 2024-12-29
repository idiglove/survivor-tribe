import {
  COMING_SOON_ELEMENT_ID,
  POST_SEASON_PHOTOS_ELEMENT_ID,
  SURVIVOR_MERCH,
  WATCH_PARAMOUNT,
} from "@/shared/constants";
import ModalButton from "../modal-button";
import ScrollButton from "../scroll-button";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
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
      <ScrollButton text="Watch Survivor" elementId={WATCH_PARAMOUNT} />
      <ScrollButton
        text="Post Season Photos"
        elementId={POST_SEASON_PHOTOS_ELEMENT_ID}
      />
      <ScrollButton text="Survivor Merch" elementId={SURVIVOR_MERCH} />
      <ScrollButton
        text="Coming Soon Features"
        elementId={COMING_SOON_ELEMENT_ID}
      />
      <Button>
        <Link href="/debates">Debates</Link>
      </Button>
    </div>
  );
};

export default Navbar;
