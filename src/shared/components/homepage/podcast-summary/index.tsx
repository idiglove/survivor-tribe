import * as React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { PODCAST_SUMMARY } from "@/shared/constants";
import { Button } from "../../ui/button";
import Link from "next/link";

const PodcastSummaryHomepage = () => {
  return (
    <div id={PODCAST_SUMMARY}>
      <h2 className="text-3xl font-bold text-left my-8">Podcast Summary</h2>
      <Card>
        <CardHeader>
          <Link
            href="/podcast-summary/season-47-finale-rhap"
            className="text-2xl font-bold"
          >
            Season 47: Finale RHAP
          </Link>
        </CardHeader>
        <CardFooter>
          <Button>
            <Link href="/podcast-summary/season-47-finale-rhap">
              See the Summary
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PodcastSummaryHomepage;
