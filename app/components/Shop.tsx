import Image from "next/image";

export default function Shop() {
  return (
    <div className="pt-[75px] border-t-5 px-4 md:px-8">
      <h1 className="text-[67px]">
        <b>SHOP</b>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop1.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop2.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop3.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop1.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop2.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-gray-100 p-2 sm:p-4 rounded-lg flex items-center justify-center">
          <Image
            src="/shop3.png"
            className="w-full max-w-xs rounded-[25px] mx-auto"
            alt="Brian Tyler Cohen"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex flex-row mt-[55px] text-[#888] m-auto ml-0">
        <p className="text-[40px] font-[700]">VIEW ALL</p>
        <svg
          width="35"
          height="35"
          viewBox="0 0 34 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-[10px] m-auto ml-0"
        >
          <path
            d="M0.566727 13.6086C0.566727 13.1265 0.957838 12.7359 1.43991 12.7365L29.1127 12.7705C29.594 12.7711 29.9838 13.1614 29.9838 13.6426L29.9838 17.328C29.9838 17.8093 29.5939 18.1996 29.1127 18.2001L1.43991 18.2342C0.957838 18.2348 0.566728 17.8441 0.566728 17.3621L0.566727 13.6086ZM16.1278 27.5782C15.7541 27.2408 15.7429 26.6581 16.1033 26.3066L26.5576 16.1096C26.9085 15.7674 26.9085 15.2033 26.5576 14.861L16.0965 4.65749C15.7387 4.30844 15.7469 3.73063 16.1145 3.39187L18.5131 1.18137C18.8571 0.864341 19.39 0.875211 19.7208 1.20601L33.3487 14.834C33.6887 15.174 33.6894 15.725 33.3502 16.0658L19.751 29.7316C19.4228 30.0614 18.8936 30.0755 18.5483 29.7637L16.1278 27.5782Z"
            fill="#888888"
          />
        </svg>
      </div>
    </div>
  );
}
