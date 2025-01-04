import WhichPlayerAreYouQuiz from "@/features/which-player-are-you-quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take the New Era Survivor Quiz - Survivor Tribe",
  description:
    "Find out who you match from the winners from Survivor 41 to Survivor 47.",
};

const NewEraPlayerQuizModalPage = () => {
  return <WhichPlayerAreYouQuiz />;
};

export default NewEraPlayerQuizModalPage;
