import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="m-auto pt-[20px] w-full flex justify-center">
        <Image
          src="/brian-hero.jpeg"
          alt="A picture of Brian Tyler Cohen"
          width={350}
          height={350}
          className="object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="m-auto">
        <p className="text-xl max-w-[75%] py-[44px] text-center m-auto">
          Brian Tyler Cohen is one of the most viewed political commentators
          online, with more than 10 million subscribers across all platforms.
          He&apos;s spent the better part of a decade giving an honest, concise,
          and entertaining assessment of our politics to audiences around the
          world. His show has become a destination for political figures,
          journalists, and even presidents, amassing billions of views. Brian
          has dedicated his life to building up progressive media and making
          politics accessible to as many people as possible.
        </p>
      </div>
    </div>
  );
}
