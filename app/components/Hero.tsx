export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="m-auto pt-[100px]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rQ5_WhB27Ic?si=6uesbyIe6tWUcQSO&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="m-auto pt-[50px] max-w-[50%] max-h-[50%]">
        <svg
          width="64px"
          height="43px"
          viewBox="0 0 64 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V43H64V0H0Z" fill="black" />
        </svg>
      </div>
      <div className="m-auto">
        <p className="text-3xl max-w-[50%] py-[44px] text-center m-auto">
          <b>Brian Tyler Cohen</b> is one of the most viewed independent
          progressive political hosts on YouTube. Lorem ipsum dolor sit amet,
          consectetur adipiscing.
        </p>
      </div>
      <div className="m-auto">
        <svg
          width="64"
          height="43"
          viewBox="0 0 64 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V43H64V0H0Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}
