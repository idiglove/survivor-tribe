import { Button } from "@/shared/components/ui/button";
import ScrollButton from "../../scroll-button";
import {
  COMING_SOON_ELEMENT_ID,
  POST_SEASON_PHOTOS_ELEMENT_ID,
} from "@/shared/constants";

const HomepageHeader = () => {
  return (
    <header>
      <div className="w-full max-w-[900px] mx-auto my-4 flex gap-4">
        <Button>Who we are</Button>
        <ScrollButton
          text="Post Season Photos"
          elementId={POST_SEASON_PHOTOS_ELEMENT_ID}
        />
        <ScrollButton
          text="Coming Soon Features"
          elementId={COMING_SOON_ELEMENT_ID}
        />
      </div>
      <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl">Survivor Tribe</h1>
        <h3>Get all updates about our favorite reality game show here!</h3>
      </div>
    </header>
  );
};

export default HomepageHeader;
