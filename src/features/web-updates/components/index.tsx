import Image from "next/image";

const WebUpdates = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-left my-8">
        Survivor Updates from the Web
      </h2>
      <div className="flex flex-col gap-4">
        <a
          href="https://slate.com/culture/2024/09/survivor-47-cbs-best-seasons-jeff-probst-new-era.html"
          className="relative w-full"
        >
          <div className="relative w-full aspect-square">
            <Image
              src="/web-updates/1.png"
              alt="Survivor - I Miss the Old Survivor"
              fill
              objectFit="cover"
            />
          </div>
          <h3 className="font-semibold hover:underline">
            I Miss the Old Survivor -{" "}
            <span className="italic">slate.com - Sept 18, 2024</span>
          </h3>
        </a>
        <a
          href="https://parade.com/tv/rachel-lamont-survivor-47-winner-interivew"
          className="relative w-full"
        >
          <div className="relative w-full aspect-square">
            <Image
              src="/web-updates/2.png"
              alt="Survivor - I Miss the Old Survivor"
              fill
              objectFit="cover"
            />
          </div>
          <h3 className="font-semibold hover:underline">
            Rachel thought she lost at FTC -{" "}
            <span className="italic">parade.com - Dec 19, 2024</span>
          </h3>
        </a>
      </div>
    </>
  );
};

export default WebUpdates;
