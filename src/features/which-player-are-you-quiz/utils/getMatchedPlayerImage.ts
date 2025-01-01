type GetMatchedPlayerImageProps = {
  title: string;
  summary: string;
  imgSrc: string;
};

const getMatchedPlayerImage = async ({
  title,
  summary,
  imgSrc,
}: GetMatchedPlayerImageProps) => {
  const getImage = new Promise<HTMLImageElement>((resolve, revoke) => {
    let img = document.createElement("img");

    img.onload = () => {
      resolve(img);
    };

    img.crossOrigin = "Anonymous";
    img.src = imgSrc;
  });

  const getLogo = new Promise<HTMLImageElement>((resolve, revoke) => {
    let img = document.createElement("img");

    img.onload = () => {
      resolve(img);
    };

    img.crossOrigin = "Anonymous";
    img.src = "/survivor-tribe-logo.png";
  });

  const getCanvasImage = async () => {
    let canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 900;

    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      return getImage.then((img: HTMLImageElement) => {
        ctx.drawImage(img, 20, 80, 550, 800);
        ctx.fillStyle = "black";
        ctx.font = "bold 40px Arial";
        ctx.fillText("You match with this player!", 30, 50);
        ctx.fillText(title, 600, 120);

        ctx.font = "30px Arial";
        const text = summary;

        const words = text.split(" ");
        let line = "";
        let y = 200;
        const maxWidth = canvas.width - 620;

        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + " ";
          const metrics = ctx.measureText(testLine);
          const testWidth = metrics.width;

          if (testWidth > maxWidth && i > 0) {
            ctx.fillText(line, 600, y);
            line = words[i] + " ";
            y += 40; // Reduced line height for better fit
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, 600, y);
        ctx.imageSmoothingQuality = "high";

        return getLogo.then((logo: HTMLImageElement) => {
          const bottomRightWidth = 450;
          const bottomRightHeight = 250;
          ctx.drawImage(
            logo,
            canvas.width - bottomRightWidth,
            canvas.height - bottomRightHeight - 20,
            bottomRightWidth,
            bottomRightHeight
          );
          const survivorText = "survivortribe.fyi";
          const textMetrics = ctx.measureText(survivorText);
          const textWidth = textMetrics.width;
          ctx.font = "20px Arial";

          ctx.fillText(
            survivorText,
            canvas.width - textWidth - 90,
            canvas.height - 20
          );

          const imageSrc = canvas.toDataURL("image/jpeg");
          return { imgSrc: imageSrc, canvas };
        });
      });
    }
  };

  return await getCanvasImage();
};

export default getMatchedPlayerImage;
