import Hero from "./components/Hero";
import VideoRow from "./components/VideoRow";
import Podcast from "./components/Podcast";
import Footer from "./components/Footer";
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
