import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";

const ComingSoon = () => {
  return (
    <>
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
            <Button>Get Updates</Button>
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
            <Button>Get Updates</Button>
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
            <Button>Get Updates</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ComingSoon;
