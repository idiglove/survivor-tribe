import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { ImageKitImage } from "@/shared/types";

interface ImageGalleryProps {
  images: ImageKitImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      style={{ maxWidth: "90%" }}
    >
      <CarouselContent className="sm:max-w-[470px]">
        {images.map((image, index: number) => (
          <CarouselItem
            key={index}
            className="w-full"
            // className="md:basi s-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="relative sm:mx-auto flex aspect-[9/16] sm:max-w-[280px] items-center justify-center p-6">
                  <Image
                    src={image.url}
                    alt="Post Survivor 47 Cast Photos"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <img
        src="/frame.png"
        alt="frame"
        className="hidden sm:block absolute w-full z-10 top-[-86px] left-0"
      />
      <CarouselPrevious className="sm:absolute z-20 top-[30%]" />
      <CarouselNext className="sm:absolute z-20 top-[30%]" />
    </Carousel>
  );
};

export default ImageGallery;
