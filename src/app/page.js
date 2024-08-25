"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { Montserrat } from "next/font/google";



const montserrat= Montserrat({
  weight: ['400', '700'],
  style: ['normal', ],
  subsets: ['latin'],
})


function Home() {
  return (
    <>
      <main className="scroll-smooth">
        <Navbar />
        <div className={montserrat.className}>
        <HeroSection />
        </div>
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
