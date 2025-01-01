"use client";

import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { newEraPlayers } from "@/assets/quiz-assets/new-era-players";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/components/ui/form";
import getClosestMatch from "./utils/getClosestMatch";
import { useState } from "react";
import getMatchedPlayerImage from "./utils/getMatchedPlayerImage";
import { useRouter } from "next/navigation";
import GetUpdateButton from "../coming-soon/components/get-update-button";

const questionsIndexes = newEraPlayers[0].questions.map(
  (_, index) => `question-${index}`
);

export type OptionsType = {
  [key: string]: { text: string; points: number };
};

export const FormSchema = z.object({
  [questionsIndexes[0]]: z
    .string()
    .min(1, { message: "Please select an option" }),
  [questionsIndexes[1]]: z
    .string()
    .min(1, { message: "Please select an option" }),
  [questionsIndexes[2]]: z
    .string()
    .min(1, { message: "Please select an option" }),
  [questionsIndexes[3]]: z
    .string()
    .min(1, { message: "Please select an option" }),
  [questionsIndexes[4]]: z
    .string()
    .min(1, { message: "Please select an option" }),
});

const WhichPlayerAreYouQuiz = () => {
  const [players, setPlayers] = useState<Record<string, any>[] | undefined>();
  const [canvasImage, setCanvasImage] = useState<string | undefined>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>();
  const questions: Record<string, any>[] = newEraPlayers[0].questions;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const playersMatched = getClosestMatch({ data });
    setPlayers(playersMatched);
  }

  const showResults = async () => {
    if (players) {
      const imgSrc = await getMatchedPlayerImage({
        title: players[0].player,
        summary: players[0].summary,
        imgSrc: players[0].imgSrc,
      });

      setCanvasImage(imgSrc?.imgSrc);
      setCanvas(imgSrc?.canvas);
    }
  };

  const downloadImage = () => {
    if (canvas) {
      canvas.toBlob((blob) => {
        const data = window.URL.createObjectURL(blob!);
        const link = document.createElement("a");
        link.href = data;
        link.download = "survivor-tribe-match-player.jpg";
        link.click();
      }, "image/jpeg");
    }
  };

  return (
    <>
      <Dialog defaultOpen onOpenChange={() => router.back()}>
        <DialogContent className="sm:max-w-[425px] overflow-scroll max-h-[calc(100vh-6rem)]">
          <DialogHeader>
            {canvasImage ? (
              <>
                <DialogTitle>Here are the results!</DialogTitle>
                <DialogDescription>
                  I&apos;ll be more than happy if you share it to anyone or to
                  any of your socials!
                </DialogDescription>
              </>
            ) : (
              <>
                <DialogTitle>
                  Which New Era Survivor Winner Are You?
                </DialogTitle>
                <DialogDescription>
                  Take this ultimate Survivor personality quiz to find out which
                  winner from seasons 41-47 matches your style!
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          {canvasImage ? (
            <div className="flex flex-col gap-2">
              <Button onClick={downloadImage}>Download Image</Button>
              <img src={canvasImage} />
            </div>
          ) : null}
          {players && !canvasImage ? (
            <GetUpdateButton
              text="Subscribe first to get more updates"
              onSubscribe={showResults}
            />
          ) : null}

          {!players && !canvasImage ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {questions.map((question, index) => {
                  const options: OptionsType = question.options;

                  return (
                    <FormField
                      key={index}
                      control={form.control}
                      name={`question-${index}`}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>{question.question}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {Object.keys(options).map((option) => {
                                const radioKey = `${index}-${option}`;
                                return (
                                  <FormItem
                                    key={radioKey}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={radioKey} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {options[option].text}
                                    </FormLabel>
                                  </FormItem>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  );
                })}
                <DialogFooter className="flex flex-col sm:flex-col gap-2 items-center">
                  <Button type="submit" className="w-full">
                    Get the answer
                  </Button>
                  <span className="text-xs">
                    Survivor Quiz v1.0 - Survivor Tribe
                  </span>
                </DialogFooter>
              </form>
            </Form>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhichPlayerAreYouQuiz;
