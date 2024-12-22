import * as React from "react";
import fetchImages from "@/features/social-media/api/fetch-images";
import { ImageKitImage } from "@/shared/types";
import ImageGallery from "./components/image-gallery";

export async function SocialMediaPostSeason() {
  const images: ImageKitImage[] = await fetchImages();

  return (
    <>
      <h2 className="text-3xl font-bold text-left my-8">
        Post Season 47 Photos
      </h2>
      <ImageGallery images={images} />
    </>
  );
}
