"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";


function Home() {
  return (
    <>
      <main className="scroll-smooth">
        <Navbar />
        <HeroSection />
        <About/>
        <Skills/>
        <Services/>
        <Project/>
        <Contact/> 
      </main>
    </>
  );
}

export default Home;
