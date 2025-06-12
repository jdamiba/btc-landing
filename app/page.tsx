import Hero from "./components/Hero";
import VideoRow from "./components/VideoRow";
import Podcast from "./components/Podcast";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import HomeFeature from "./components/HomeFeature";
import HomeFeatureReverse from "./components/HomeFeatureReverse";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[1440px] w-full mx-auto">
        <Hero />
        <VideoRow />
        <Podcast />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
