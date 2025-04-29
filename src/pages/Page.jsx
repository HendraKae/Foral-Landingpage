import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import Service from "../sections/ServiceSection";
import Project from "../sections/ProjectSection";
import Contact from "../sections/ContactSection";
import About from "../sections/AboutSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
