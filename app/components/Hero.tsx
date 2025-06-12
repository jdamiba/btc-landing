import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="m-auto pt-[100px] w-full flex justify-center">
        <Image
          src="/patreon.png"
          alt="Patreon"
          width={800}
          height={800}
          className="object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="m-auto">
        <p className="text-3xl max-w-[50%] py-[44px] text-center m-auto">
          Brian Tyler Cohen is one of the most viewed political commentators
          online, with more than 10 million subscribers across all platforms.
          He's spent the better part of a decade giving an honest, concise, and
          entertaining assessment of our politics to audiences around the world.
          His show has become a destination for political figures, journalists,
          and even presidents, amassing billions of views. Brian has dedicated
          his life to building up progressive media and making politics
          accessible to as many people as possible. Thanks for supporting
          independent media.
        </p>
      </div>
    </div>
  );
}
