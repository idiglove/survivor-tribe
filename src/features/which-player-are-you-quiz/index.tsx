import { Button, ButtonProps } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { newEraPlayers } from "@/assets/quiz-assets/new-era-players";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Label } from "@/shared/components/ui/label";

const WhichPlayerAreYouQuiz = () => {
  const questions = newEraPlayers[0].questions;
  const firstQuestion = questions[0];
  const options: {
    [key: string]: { text: string; points: number };
  } = firstQuestion.options;
  return (
    <>
      <h2>
        Survior Quiz - Answer to know which player is most like you from the New
        Era of Survivor
      </h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Which Survivor Player is like you?</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Which New Era Survivor Winner Are You?</DialogTitle>
            <DialogDescription>
              Take this ultimate Survivor personality quiz to find out which
              contestant from seasons 41-47 matches your style!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <h3>{firstQuestion.question}</h3>
            <RadioGroup defaultValue="option-one">
              {Object.keys(options).map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{options[option].text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <DialogFooter>
            <Button type="submit">Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhichPlayerAreYouQuiz;
