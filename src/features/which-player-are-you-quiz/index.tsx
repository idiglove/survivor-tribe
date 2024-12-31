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
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { newEraPlayers } from "@/assets/quiz-assets/new-era-players";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/shared/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/components/ui/form";
import getClosestMatch from "./utils/getClosestMatch";
import { useState } from "react";
import Image from "next/image";

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
  const [players, setPlayers] = useState<Record<string, any>[]>(null);
  const { toast } = useToast();
  const questions: Record<string, any>[] = newEraPlayers[0].questions;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const playersMatched = getClosestMatch({ data });
    setPlayers(playersMatched);
    console.log({ playersMatched, data });
    // toast({
    //   title: "Here's your points",
    //   description: <span>{JSON.stringify(players)}</span>,
    // });
  }

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
          {players ? (
            <>
              {players.map((player, index) => {
                return (
                  <div key={index} className="flex justify-center items-center">
                    <div className="flex flex-col items-center text-center gap-2">
                      <h3 className="font-bold text-md">{player.player}</h3>
                      <Image
                        src={player.imgSrc}
                        alt={player.player}
                        width={100}
                        height={100}
                      />
                      <p className="font-semibold text-sm">{player.summary}</p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
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
                              {Object.keys(options).map(
                                (option, optionIndex) => {
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
                                }
                              )}
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
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhichPlayerAreYouQuiz;
