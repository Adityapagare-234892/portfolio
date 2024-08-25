"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { Button } from "@mui/material";



const HeroSection = () => {
  return (
    <div className="max-w-full h-screen">
      <div className="flex justify-center items-center">
        <div className="w-full h-screen bg-[#222] flex justify-center items-center">
          <div>
          <h1 className="font-bold sm:text-4xl text-2xl my-5 text-[white] tracking-widest">Welcome to My Portfolio</h1>
          <div className="flex justify-center items-center">
          <Image src={"/logo/Addy.jpg"} width={180} height={180} 
          alt="Image"
          className="object-cover rounded-full sm:w-[250px] sm:h-[250px]"/>
          </div>
          <h1 className="text-center sm:text-md  mt-5 text-white">My Self</h1>
          <h1 className="text-center sm:text-2xl text-3xl  mt-2 font-bold text-white">Aditya Pagare</h1>
          <h1 className="text-center sm:text-md text-md tracking-widest mt-2  text-white">A Front-End Web Developer</h1>
          <div className="text-center mt-3">
          <Button className="bg-white w-36 rounded-xl text-[#222] font-semibold">Contact</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
