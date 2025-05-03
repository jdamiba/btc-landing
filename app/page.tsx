import Hero from "./components/Hero";
import VideoRow from "./components/VideoRow";
import Podcast from "./components/Podcast";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[1440px] w-full mx-auto">
        <Hero />
        <VideoRow />
        <Podcast />
        <Shop />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}
