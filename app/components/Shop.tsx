import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div id="merch" className="flex flex-col px-4 md:px-8">
      <div className="flex flex-col w-full mx-auto border-t-5 pt-[25px] pb-[100px] mt-[50px] px-4 md:px-8">
        <h1 className="text-[67px]">
          <b>MERCH</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="https://brian-tyler-cohen.myshopify.com/products/got-it-cuffed-beanie"
            target="_blank"
          >
            <div className="bg-gray-100 rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
              <div className="p-2 sm:p-4 flex items-center justify-center">
                <Image
                  src="/beanie.webp"
                  className="w-full max-w-xs rounded-[25px] mx-auto"
                  alt="...got it Cuffed Beanie - Black"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-black mb-1">
                  &ldquo;...got it&rdquo; Cuffed Beanie
                </h3>
                <p className="text-sm text-gray-600">Black/Navy</p>
                <p className="text-lg font-bold text-black mt-2">$23.50</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://brian-tyler-cohen.myshopify.com/products/no-lie-glossy-mug-black"
            target="_blank"
          >
            <div className="bg-gray-100 rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
              <div className="p-2 sm:p-4 flex items-center justify-center">
                <Image
                  src="/mug.webp"
                  className="w-full max-w-xs rounded-[25px] mx-auto"
                  alt="No Lie Glossy Mug - Black"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-black mb-1">
                  &ldquo;No Lie&rdquo; Glossy Mug
                </h3>
                <p className="text-sm text-gray-600">Black</p>
                <p className="text-lg font-bold text-black mt-2">$10.00</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://brian-tyler-cohen.myshopify.com/products/democracy-watch-unisex-hoodie-white"
            target="_blank"
          >
            <div className="bg-gray-100 rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
              <div className="p-2 sm:p-4 flex items-center justify-center">
                <Image
                  src="/hoodie.webp"
                  className="w-full max-w-xs rounded-[25px] mx-auto"
                  alt="Democracy Watch Unisex Hoodie - White"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-black mb-1">
                  &ldquo;Democracy Watch&rdquo; Hoodie
                </h3>
                <p className="text-sm text-gray-600">White</p>
                <p className="text-lg font-bold text-black mt-2">$46.50</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://brian-tyler-cohen.myshopify.com/products/legal-breakdown-unisex-t-shirt-black-navy"
            target="_blank"
          >
            <div className="bg-gray-100 rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
              <div className="p-2 sm:p-4 flex items-center justify-center">
                <Image
                  src="/tshirt.webp"
                  className="w-full max-w-xs rounded-[25px] mx-auto"
                  alt="Legal Breakdown Unisex T-shirt - Black/Navy"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-black mb-1">
                  &ldquo;Legal Breakdown&rdquo; T-shirt
                </h3>
                <p className="text-sm text-gray-600">Black/Navy</p>
                <p className="text-lg font-bold text-black mt-2">$16.50</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row mt-[55px] text-[#888] m-auto ml-0">
          <Link
            href="https://brian-tyler-cohen.myshopify.com/collections/all"
            target="_blank"
          >
            <p className="text-[40px] font-[700]">VIEW ALL</p>
          </Link>
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
    </div>
  );
}
