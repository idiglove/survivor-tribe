import * as React from "react";

import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import fetchImages from "../../api/fetch-images";
import Image from "next/image";

export async function SocialMediaPostSeason() {
  const images = await fetchImages();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {images.map((image, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.url}
                    alt="Survior Post Season 47"
                    layout="fill"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
