import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { COMING_SOON_ELEMENT_ID } from "@/shared/constants";
import GetUpdateButton from "./get-update-button";

const ComingSoon = () => {
  return (
    <div id={COMING_SOON_ELEMENT_ID}>
      <h2 className="text-3xl font-bold text-left my-8">Coming soon!</h2>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <h3 className="font-semibold">Season 48 Fantasy Game</h3>
          </CardHeader>
          <CardContent>
            Make your predictions on things like who will get the first immunity
            idol, which alliance will be made, <br />
            who will get to top 5, and many more!
          </CardContent>
          <CardFooter>
            <GetUpdateButton />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="font-semibold">Post Tribal Council Nuggets</h3>
          </CardHeader>
          <CardContent>
            Get bite-sized nuggets on post tribal council interviews!
          </CardContent>
          <CardFooter>
            <GetUpdateButton />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="font-semibold">
              Quiz: What kind of Survivor Player are you?
            </h3>
          </CardHeader>
          <CardContent>
            Choose from 3 players and get to dissect the kind of game that you
            would play!
          </CardContent>
          <CardFooter>
            <GetUpdateButton />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoon;
