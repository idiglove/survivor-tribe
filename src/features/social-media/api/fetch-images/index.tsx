const fetchImages = async () => {
  const response = await fetch(
    "https://api.imagekit.io/v1/files?fileType=image&path=/post-season-47",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Basic cHJpdmF0ZV9FKzI2cVV5YW5vdEVobklkcWkvcVV4eDY5d0E9Og==",
      },
    }
  );
  const data = await response.json();
  return data;
};

export default fetchImages;
