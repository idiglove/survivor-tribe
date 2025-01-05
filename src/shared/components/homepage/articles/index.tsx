import * as React from "react";
import { Card, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { Button } from "../../ui/button";
import Link from "next/link";

const ArticlesHomepage = () => {
  return (
    <div className="flex flex-col items-left px-8 gap-4">
      <h2 className="text-3xl font-bold text-left my-2">
        Articles that I proudly made (not a writer initially)
      </h2>
      <Card>
        <CardHeader>Top 3 Moments in Survivor 47 Finale</CardHeader>
        <CardFooter>
          <Link href="/posts/top-three-moments-survivor-47-finale">
            <Button className="whitespace-normal p-6">
              I&apos;m proud of this article, NGL, read it!
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Survivor 47 Cast Photos After the Finale</CardHeader>
        <CardFooter>
          <Button className="whitespace-normal p-6">
            <Link href="/posts/survivor-47-cast-photos-after-finale">
              Another article, enjoy!
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          How Jury Management Impacts Survivor&apos;s Million-Dollar Vote
        </CardHeader>
        <CardFooter>
          <Button className="whitespace-normal p-6">
            <Link href="/posts/jury-management">Learn from this article</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticlesHomepage;
