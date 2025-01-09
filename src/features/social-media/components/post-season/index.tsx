import * as React from "react";
import fetchImages from "@/features/social-media/api/fetch-images";
import { ImageKitImage } from "@/shared/types";
import ImageGallery from "./components/image-gallery";
import { POST_SEASON_PHOTOS_ELEMENT_ID } from "@/shared/constants";

export async function SocialMediaPostSeason() {
  const images: ImageKitImage[] = await fetchImages();

  return (
    <div
      id={POST_SEASON_PHOTOS_ELEMENT_ID}
      className="flex flex-col items-center px-8 mb-40"
    >
      <h2 className="w-full text-3xl font-bold text-left my-8 mb-28">
        Post Survivor 47 Cast Photos
      </h2>
      <ImageGallery images={images} />
    </div>
  );
}
