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
    >
      <CarouselContent>
        {images.map((image, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-[9/16] items-center justify-center p-6">
                  <Image src={image.url} alt="Post Survivor 47 Cast Photos" fill />
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
};

export default ImageGallery;
