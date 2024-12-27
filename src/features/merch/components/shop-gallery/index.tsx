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
      alt: "Survivor 47 Operation Italy Unisex T-shirt",
      text: "Survivor Season 47 Operation Italy Unisex T-shirt",
      price: "$41.00 CAD",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-operation-italy-unisex-comfort-colors-t-shirt",
    },
    {
      src: "/merch/survivor-season-47-buff-headwear.png",
      alt: "Survivor 47 Merge BUFF® Headwear",
      text: "Survivor Season 47 Merge BUFF® Headwear",
      price: "$37.00 CAD - SOLD OUT",
      href: "https://www.paramountshop.com/en-ca/collections/survivor/products/survivor-season-47-merge-buff-headwear",
    },
    {
      src: "/merch/survivor-season-46-logo-mug-103795_1100x.webp",
      alt: "Survivor 46 Logo Mug",
      text: "Survivor Season 46 Logo Mug",
      price: "$25.00 CAD",
      href: "https://www.paramountshop.com/en-ca/products/survivor-season-46-logo-mug?variant=42105834111023&utm_source=google&utm_medium=organic&utm_campaign=Paramount%20Shop%20Canada%20Market&utm_content=Survivor%20Season%2046%20Logo%20Mug&utm_source=google&utm_medium=paid&utm_campaign=21702106552&utm_content=167300757053&utm_term=&gadid=713368392862&gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHveeAe5gY7kjsh9HvF08pco9WOPgs3zn-51HYb7He9nYYYWmmXJNkAaAhrdEALw_wcB",
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
