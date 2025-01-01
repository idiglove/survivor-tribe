import { z } from "zod";
import { newEraPlayers } from "@/assets/quiz-assets/new-era-players";
import { FormSchema, OptionsType } from "..";

const getClosestMatch = ({ data }: { data: z.infer<typeof FormSchema> }) => {
  const playerPoints = newEraPlayers.map((question) => {
    const totalPoints = Object.entries(data).reduce((sum, [key, value]) => {
      const questionIndex = parseInt(key.split("-")[1]);
      const optionIndex = value.split("-")[1];
      const questionData: { options: OptionsType }[] = question.questions;

      if (
        questionData[questionIndex] &&
        questionData[questionIndex].options[optionIndex]
      ) {
        const points = questionData[questionIndex].options[optionIndex].points;
        if (points === 5) {
          return sum + points * 2;
        }

        if (points === 4) {
          return sum + points * 1.5;
        }

        return sum + points;
      }

      return sum;
    }, 0);
    return totalPoints;
  });

  const maxValue = Math.max(...playerPoints);
  const indices = playerPoints.reduce(
    (accumulator: number[], currentValue, currentIndex) => {
      if (currentValue === maxValue) {
        accumulator.push(currentIndex);
      }
      return accumulator;
    },
    []
  );

  return indices.map((index) => newEraPlayers[index]);
};

export default getClosestMatch;
