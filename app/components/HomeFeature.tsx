import Image from "next/image";

export default function HomeFeature() {
  return (
    <div className="flex pt-[50px] border-t-5 flex-col md:flex-row items-center justify-center w-full mx-auto px-4 md:px-8 py-12 gap-8">
      <div className="flex flex-col justify-center order-1 md:order-1 text-center md:text-left max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lorem Ipsum Dolor
        </h2>
        <p className="text-lg md:text-xl text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex justify-center order-2 md:order-2">
        <Image
          src="/patreon.png"
          alt="Patreon"
          width={400}
          height={400}
          className="object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
