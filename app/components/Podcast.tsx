import Image from "next/image";
import SpotifyLogo from "./icons/SpotifyLogo";
import AppleMusicLogo from "./icons/AppleMusicLogo";
import AmazonMusicLogo from "./icons/AmazonMusicLogo";
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
          <div className="flex flex-col md:flex-row gap-2 items-center">
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/0066rKCBIycIMI4os6Ec5V"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <span className="inline-block w-32 h-32 md:w-24 md:h-24 lg:w-48 lg:h-48 p-2 rounded-xl transition-transform hover:scale-105">
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
              <span className="inline-block w-32 h-32 md:w-24 md:h-24 lg:w-48 lg:h-48 p-2 rounded-xl transition-transform hover:scale-105">
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
              <span className="inline-block w-32 h-32 md:w-24 md:h-24 lg:w-48 lg:h-48 p-2 rounded-xl transition-transform hover:scale-105">
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
              <span className="inline-block w-32 h-32 md:w-24 md:h-24 lg:w-48 lg:h-48 p-2 rounded-xl transition-transform hover:scale-105">
                <AmazonMusicLogo className="w-full h-full" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
