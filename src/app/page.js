import ProjectCards from "@/components/ProjectCards";
import SmoothScroll from "@/components/SmoothScroll";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import GallerySection from "@/sections/GallerySection";
import GamingProjects from "@/sections/GamingProjects";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Projects from "@/sections/Projects";
import Ready from "@/sections/Ready";
import ServiceSliders from "@/sections/ServiceSliders";
import TextLoop from "@/sections/TextLoop";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="" style={{ fontFamily: "var(--font-my)" }}>
      <SmoothScroll />
      <div className="relative " >

        <Hero />
        <img src="/hero1.png" alt="" className='absolute max-md:w-100 max-lg:w-120 right-1/2 left-1/2 -translate-x-1/2 mx-auto h-fit z-10 top-[55%] md:top-1/2 -translate-y-[70%] ' />

        <Projects />
        <ProjectCards />

      </div>
      <GallerySection />
      <GamingProjects />
      <Products />
      <ServiceSliders />
      <TextLoop />
      <Contact />
      <Ready />
      <Footer />
    </div>
  );
}
