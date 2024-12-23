"use client";
import { useEffect, useState } from "react";
import ContentHeading from "../content-heading";
import ReactPlayer from "react-player";

const Season47FinaleRhap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="font-bold text-3xl text-center">
        Why ___ Won (And the Others Lost) Survivor 47 - Summary
      </h1>
      <div className="flex justify-center">
        {isClient && (
          <ReactPlayer url="https://www.youtube.com/watch?v=6hjKMAJ-xDk" />
        )}
      </div>

      <ContentHeading>Overview</ContentHeading>
      <p>
        The hosts, David and Jessica, dive deep into the thrilling finale of
        Survivor season 47, discussing why Rachel ultimately won and why Sam,
        Sue, and Teeny lost. They begin by highlighting the intense dynamics of
        the final Tribal Council, where a 7-1 vote might seem predictable, but
        the episode still delivered some compelling moments. The hosts praise
        the jury for their thoughtful questions, contrasting it with the
        artificial limits seen in previous seasons. They also address the
        controversial fire-making challenge, expressing their dissatisfaction
        with its place in the game, and how it overshadowed other elements of
        gameplay. David then breaks down the strategies of the final four, using
        his “rules for winning” to analyze each player's game.{" "}
      </p>
      <ContentHeading>Rachel’s Winning Strategy</ContentHeading>
      <p>
        Rachel’s game stands out, especially her flexibility. She bounced back
        from early blindsides, cleverly used her idol, and maintained strong
        relationships with allies, making calculated decisions. Rachel’s
        emotional manipulation, like playing on Andy’s guilt, and her ability to
        control the narrative without appearing overly aggressive, helped her
        secure the win.
      </p>
      <ContentHeading>Sam’s Game Analysis</ContentHeading>
      <p>
        Sam, while strategic, struggled with his alliances and social game.
        Despite his “scrappy” nature, he failed to check in with allies like
        Andy, and his inability to manage relationships led to his downfall. His
        emotional responses, although controlled at times, often backfired.
      </p>
      <ContentHeading>Sue’s Under-the-Radar Approach</ContentHeading>
      <p>
        Sue, on the other hand, played a loyal and under-the-radar game. Her
        inability to distance herself from stronger players like Caroline and
        Gabe, as well as her emotional investments, kept her from making the
        moves needed to win. Her focus on loyalty, though admirable, was seen as
        a weakness in the eyes of the jury.{" "}
      </p>
      <ContentHeading>Tiny’s Social Game</ContentHeading>
      <p>
        Teeny’s social game was their strength, but their emotional connections
        became their downfall. They were often left out of key decisions and
        failed to adapt strategically, relying too much on personal
        relationships rather than gameplay. In conclusion, the hosts emphasize
        that while all four finalists played to their strengths, Rachel’s
        adaptability and strategic gameplay stood out.
      </p>
      <p>
        The podcast explores how each contestant could have improved, but
        ultimately, it was Rachel’s calculated decision-making, combined with
        her social skills and flexibility, that secured her victory.
      </p>
    </div>
  );
};

export default Season47FinaleRhap;
