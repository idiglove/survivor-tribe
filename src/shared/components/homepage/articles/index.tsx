import * as React from "react";
import { Card, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Button } from "../../ui/button";
import Link from "next/link";

const ArticlesHomepage = () => {
  return (
    <div className="flex flex-col items-left px-8">
      <h2 className="text-3xl font-bold text-left my-8">
        Articles that I proudly made (not a writer initially)
      </h2>
      <Card>
        <CardHeader>
          <Link
            href="/podcast-summary/season-47-finale-rhap"
            className="text-2xl font-bold"
          >
            Top 3 Moments in Survivor 47 Finale
          </Link>
        </CardHeader>
        <CardFooter>
          <Button>
            <Link href="/posts/top-three-moments-survivor-47-finale">
              I&apos;m proud of this article, NGL, read it!
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticlesHomepage;
