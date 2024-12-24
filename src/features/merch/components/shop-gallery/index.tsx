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
import { SURVIVOR_MERCH } from "@/shared/constants";

const ShopGallery = () => {
  const items = [
    {
      src: "/merch/operation-italy-unisex-tshirt.png",
      alt: "Survivor Season 47 Operation Italy Unisex T-shirt",
      text: "Survivor Season 47 Operation Italy Unisex T-shirt",
      price: "$41.00 CAD",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-operation-italy-unisex-comfort-colors-t-shirt",
    },
    {
      src: "/merch/survivor-season-47-buff-headwear.png",
      alt: "Survivor Season 47 Merge BUFF® Headwear",
      text: "Survivor Season 47 Merge BUFF® Headwear",
      price: "$37.00 CAD - SOLD OUT",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-season-47-merge-buff-headwear",
    },
    {
      src: "/merch/survivor-outwit-outplay-outlast-adult-tshirt.png",
      alt: "Survivor Outwit, Outplay, Outlast Logo Adult Short Sleeve T-Shirt",
      text: "Survivor Outwit, Outplay, Outlast Logo Adult Short Sleeve T-Shirt",
      price: "$40.00 CAD",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-outwit-outplay-outlast-logo-adult-short-sleeve-t-shirt",
    },
    {
      src: "/merch/survivor-sherpa-blanket.png",
      alt: "Survivor Mashup Logo Sherpa Blanket",
      text: "Survivor Mashup Logo Sherpa Blanket",
      price: "$73.00 CAD",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-mashup-logo-sherpa-blanket-sc2917",
    },
  ];
  return (
    <div id={SURVIVOR_MERCH} className="flex flex-col items-center px-8">
      <h2 className="w-full text-3xl font-bold text-left my-8">
        Survivor Merch
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
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image src={item.src} alt={item.alt} fill />
                </CardContent>
                <CardFooter className="flex flex-col text-left items-start pb-0">
                  <a
                    href={item.href}
                    className="hover:text-secondary"
                    target="__blank"
                  >
                    <h3 className="font-bold">{item.text}</h3>
                  </a>
                  <h4>{item.price}</h4>
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

export default ShopGallery;
