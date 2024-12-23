const fetchImages = async () => {
  const response = await fetch(
    "https://api.imagekit.io/v1/files?fileType=image&path=/post-season-47&sort=DESC_CREATED",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${process.env.IMAGE_KIT_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export default fetchImages;
