import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { WATCH_PARAMOUNT } from "@/shared/constants";

const WatchParamount = () => {
  const items = [
    {
      href: "https://www.paramountplus.com/ca/shows/video/pwETeeCmpMYEFT51ThCNElEdSTGwm5U_/",
      imgSrc:
        "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2024/09/13/2371949123973/PPCBS_SURVIVOR_4701_2855833_1920x1080.jpg",
      title: "Watch Survivor 47 Episode 1 on Paramount+",
    },
    {
      href: "https://www.amazon.com/Survivor-Season-47/dp/B0DH8BFHKX",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Survivor_47_logo.webp",
      title: "Buy Season 47 on Amazon HD $24.99",
    },
    {
      href: "https://www.paramountplus.com/ca/shows/video/Cepk0zKh0qrU8qWPYwc1aWzXER5Ri1i2/",
      imgSrc:
        "https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2024/09/13/2371964483714/PPCBS_SURVIVOR_4712_3014567_1920x1080.jpg",
      title: "Watch Survivor 47 Episode 12 - Operation: Italy - on Paramount+",
    },
    {
      href: "https://www.paramountplus.com/ca/shows/video/JCXP6IO2w38T__T0oRuDzaALJHqGipvI/",
      imgSrc:
        "https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2024/09/13/2371964995655/PPCBS_SURVIVOR_4714_3033603_1920x1080.jpg",
      title: "Watch Survivor 47 Finale on Paramount+",
    },
    {
      href: "https://www.amazon.com/Survivor-Season-47/dp/B0DH8BFHKX",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Survivor_47_logo.webp",
      title: "Buy Season 47 Episode 1 on Amazon HD $2.99",
    },
  ];
  return (
    <div id={WATCH_PARAMOUNT} className="flex flex-col items-center px-8">
      <h2 className="w-full text-3xl font-bold text-left my-8">
        Where to watch Survivor 47
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        style={{ maxWidth: "90%" }}
      >
        <CarouselContent>
          {items.map((item, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 h-full">
                <CardContent className="relative flex aspect-video items-center justify-center p-6">
                  <Image src={item.imgSrc} alt={item.title} fill />
                </CardContent>
                <CardFooter className="flex flex-col text-left items-start p-0 pt-4">
                  <a
                    href={item.href}
                    className="hover:text-secondary"
                    target="__blank"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WatchParamount;
