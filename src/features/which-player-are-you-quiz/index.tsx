import { Button } from "@/shared/components/ui/button";
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
        <DialogContent className="sm:max-w-[425px] overflow-scroll max-h-[calc(100vh-6rem)]">
          <DialogHeader>
            <DialogTitle>Which New Era Survivor Winner Are You?</DialogTitle>
            <DialogDescription>
              Take this ultimate Survivor personality quiz to find out which
              winner from seasons 41-47 matches your style!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {questions.map((question, index) => {
              const options: {
                [key: string]: { text: string; points: number };
              } = question.options;
              return (
                <div key={index} className="flex flex-col gap-2">
                  <h3>{question.question}</h3>
                  <RadioGroup defaultValue="option-one">
                    {Object.keys(options).map((option, optionIndex) => {
                      const radioKey = `${index}-${option}`;
                      return (
                        <div
                          key={optionIndex}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem value={radioKey} id={radioKey} />
                          <Label htmlFor={radioKey}>{options[option].text}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              );
            })}
          </div>
          <DialogFooter className="flex flex-col sm:flex-col gap-2">
            <Button type="submit">Next</Button>
            <span className="text-xs">Survivor Tribe Quiz v1.0</span>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhichPlayerAreYouQuiz;
