import Image from "next/image";

export default function Podcast() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto px-4 md:px-8 py-4 gap-8 border-t-5">
        <div className="flex flex-row flex-wrap max-w-[450px] pb-[75px]">
          <div className="mr-[20px]">
            <svg
              width="173"
              height="115"
              viewBox="0 0 173 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.00012207V114.45H172.096V0.00012207H0Z"
                fill="black"
              />
              <path
                d="M99.6164 33.2109H72.4599C72.2291 33.2109 72.0376 33.2895 71.8756 33.4517C71.7136 33.6138 71.635 33.8054 71.635 34.0363V40.6932C71.635 40.9241 71.7136 41.1157 71.8756 41.2778C72.0376 41.44 72.2291 41.5186 72.4599 41.5186H80.6888C80.9196 41.5186 81.0325 41.6316 81.0325 41.8625V80.4234C81.0325 80.6543 81.1111 80.8459 81.2731 81.0081C81.4351 81.1702 81.6266 81.2488 81.8574 81.2488H89.8801C90.1059 81.2488 90.3023 81.1702 90.4644 81.0081C90.6264 80.8508 90.7049 80.6543 90.7049 80.4234V41.8625C90.7049 41.6365 90.8179 41.5186 91.0486 41.5186H99.6213C99.8471 41.5186 100.044 41.44 100.206 41.2778C100.363 41.1206 100.446 40.9241 100.446 40.6932V34.0363C100.446 33.8103 100.368 33.6138 100.206 33.4517C100.044 33.2895 99.852 33.2109 99.6213 33.2109"
                fill="white"
              />
              <path
                d="M56.5519 56.6059C56.4144 56.4684 56.4389 56.3308 56.6206 56.1933C59.7285 54.1348 61.285 50.8432 61.285 46.3135C61.285 41.7839 59.9937 38.6986 57.4111 36.5025C54.8285 34.3065 51.2492 33.2109 46.6781 33.2109H34.0106C33.7799 33.2109 33.5884 33.2895 33.4264 33.4517C33.2644 33.6138 33.1858 33.8054 33.1858 34.0363V80.4234C33.1858 80.6543 33.2644 80.8459 33.4264 81.0081C33.5884 81.1702 33.7799 81.2488 34.0106 81.2488H48.1854C52.2557 81.2488 55.5699 80.1041 58.1279 77.8196C60.686 75.5351 61.9674 72.2632 61.9674 68.0087C61.9674 62.9779 60.1606 59.1803 56.5519 56.6207V56.6059ZM42.8582 41.8526C42.8582 41.6267 42.9712 41.5087 43.2019 41.5087H46.8843C48.4849 41.5087 49.7075 42.0148 50.552 43.017C51.3965 44.0241 51.8187 45.4636 51.8187 47.3403C51.8187 49.217 51.3818 50.5091 50.5176 51.4917C49.6486 52.4742 48.4358 52.9655 46.8843 52.9655H43.2019C42.9712 52.9655 42.8582 52.8525 42.8582 52.6216V41.8477V41.8526ZM50.9988 71.2217C50.1298 72.3172 48.9416 72.8675 47.4342 72.8675H43.2019C42.9712 72.8675 42.8582 72.7545 42.8582 72.5236V60.3102C42.8582 60.0793 42.9712 59.9663 43.2019 59.9663H47.503C48.9661 59.9663 50.1298 60.5608 50.9988 61.7497C51.8678 62.9386 52.2999 64.5402 52.2999 66.5545C52.2999 68.5687 51.8629 70.1212 50.9988 71.2217Z"
                fill="white"
              />
              <path
                d="M130.062 47.9643L138.085 47.6204C138.311 47.6204 138.507 47.5418 138.669 47.3797C138.826 47.2175 138.91 47.0259 138.91 46.795V46.0385C138.91 41.9657 137.663 38.7183 135.173 36.2963C132.689 33.8792 129.375 32.6657 125.231 32.6608H123.758C119.644 32.6608 116.339 33.8742 113.85 36.2963C111.356 38.7232 110.114 41.9706 110.114 46.0385V68.2691C110.114 72.3861 111.361 75.6679 113.85 78.1145C116.339 80.5611 119.644 81.7844 123.758 81.7844C123.768 81.7844 123.783 81.7844 123.792 81.7844H125.231C129.331 81.7794 132.63 80.5561 135.139 78.1145C137.653 75.6679 138.91 72.3861 138.91 68.2691V67.5813C138.91 67.3553 138.831 67.1588 138.669 66.9967C138.507 66.8346 138.316 66.756 138.085 66.756L130.062 66.412C129.832 66.412 129.64 66.4907 129.478 66.6528C129.316 66.8149 129.237 67.0065 129.237 67.2374V69.0896C129.237 70.416 128.869 71.4821 128.143 72.278C127.416 73.069 126.444 73.4718 125.226 73.4767H123.788C123.778 73.4767 123.763 73.4767 123.753 73.4767C122.565 73.4767 121.603 73.0788 120.871 72.278C120.139 71.4772 119.776 70.416 119.776 69.0896V45.4145C119.776 44.0881 120.139 43.0121 120.871 42.1917C121.603 41.3663 122.56 40.9586 123.753 40.9586C123.763 40.9586 123.778 40.9586 123.788 40.9586H125.226C126.444 40.9684 127.416 41.3762 128.143 42.1917C128.874 43.0171 129.237 44.093 129.237 45.4145V47.1979C129.237 47.7039 129.512 47.9545 130.062 47.9545V47.9643Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-5xl flex flex-col ">
            <p className="m-auto">
              <b>Podcast</b>
            </p>
          </div>
        </div>
        <iframe
          src="https://www.art19.com/shows/no-lie/embed?playlist_type=playlist"
          className="w-full mx-auto rounded-2xl border-0"
          style={{ height: "380px" }}
          scrolling="no"
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        <div className="flex flex-col items-center mt-4">
          <span className="text-lg font-semibold mb-2">Also available on</span>
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/0066rKCBIycIMI4os6Ec5V"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              aria-label="Spotify"
            >
              <span className="rounded-lg shadow-md bg-white p-6 group-hover:scale-110 transition-transform border border-gray-200">
                <Image
                  src="/spotify.png"
                  alt="Spotify"
                  width={56}
                  height={56}
                  className="object-contain rounded-lg w-14 h-14"
                  priority={false}
                />
              </span>
              <span className="mt-2 text-base font-medium group-hover:text-blue-600 transition-colors text-center">
                Spotify
              </span>
            </a>
            {/* Apple Music */}
            <a
              href="https://podcasts.apple.com/us/podcast/no-lie-with-brian-tyler-cohen/id1515399733"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              aria-label="Apple Music"
            >
              <span className="rounded-lg shadow-md bg-white p-6 group-hover:scale-110 transition-transform border border-gray-200">
                <Image
                  src="/applemusic.svg"
                  alt="Apple Music"
                  width={56}
                  height={56}
                  className="object-contain rounded-lg w-14 h-14"
                  priority={false}
                />
              </span>
              <span className="mt-2 text-base font-medium group-hover:text-blue-600 transition-colors text-center">
                Apple Music
              </span>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/playlist?list=PLOMpnzRkbFsjUgBe1d5g6d5RuKpDWeBtq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              aria-label="YouTube"
            >
              <span className="rounded-lg shadow-md bg-white p-6 group-hover:scale-110 transition-transform border border-gray-200">
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={56}
                  height={56}
                  className="object-contain rounded-lg w-14 h-14"
                  priority={false}
                />
              </span>
              <span className="mt-2 text-base font-medium group-hover:text-blue-600 transition-colors text-center">
                YouTube
              </span>
            </a>
            {/* Amazon Music */}
            <a
              href="https://music.amazon.com/podcasts/d366c4f6-bfc6-448e-93e8-506d1e3b1daa/no-lie-with-brian-tyler-cohen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              aria-label="Amazon Music"
            >
              <span className="rounded-lg shadow-md bg-white p-6 group-hover:scale-110 transition-transform border border-gray-200">
                <Image
                  src="/amazonmusic.svg"
                  alt="Amazon Music"
                  width={56}
                  height={56}
                  className="object-contain rounded-lg w-14 h-14"
                  priority={false}
                />
              </span>
              <span className="mt-2 text-base font-medium group-hover:text-blue-600 transition-colors text-center">
                Amazon Music
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
