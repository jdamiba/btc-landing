import Image from "next/image";
import SpotifyLogo from "./icons/SpotifyLogo";
import AppleMusicLogo from "./icons/AppleMusicLogo";
// import YouTubeLogo from "./icons/YouTubeLogo";

export default function Podcast() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto px-4 md:px-8 py-12 gap-8 border-t-5">
        <div>
          <h1 className="text-[67px]">
            <b>PODCAST</b>
          </h1>
        </div>
        <iframe
          src="https://www.art19.com/shows/no-lie/embed?playlist_type=playlist"
          style={{
            width: "100%",
            height: "380px",
            border: "0 none",
            borderRadius: "25px",
          }}
          scrolling="no"
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
        <div className="flex flex-col items-center mt-4">
          <span className="text-lg font-semibold mb-2">Also available on</span>
          <div className="flex flex-row gap-6">
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/0066rKCBIycIMI4os6Ec5V"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <span className="inline-block w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28">
                <SpotifyLogo className="w-full h-full" />
              </span>
            </a>
            {/* Apple Music */}
            <a
              href="https://podcasts.apple.com/us/podcast/no-lie-with-brian-tyler-cohen/id1515399733"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
            >
              <span className="inline-block w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28">
                <AppleMusicLogo className="w-full h-full" />
              </span>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/playlist?list=PLOMpnzRkbFsjUgBe1d5g6d5RuKpDWeBtq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <span className="inline-block w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28">
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </span>
            </a>
            {/* Amazon Music */}
            <a
              href="https://music.amazon.com/podcasts/d366c4f6-bfc6-448e-93e8-506d1e3b1daa/no-lie-with-brian-tyler-cohen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon Music"
            >
              <span className="inline-block w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28">
                <Image
                  src="/amazon-music.png"
                  alt="Amazon Music"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
