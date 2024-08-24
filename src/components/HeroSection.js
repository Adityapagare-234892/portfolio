"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="w-full min-h-screen ">
        <img src="/logo/lion.jpg" alt="" className="object-cover w-full h-screen" />
        <div>
          <p>let's do something lengendary together</p>
          <h1>Hi! I'm Aditya. </h1>

        </div>
      </div>
    </>
  );
};

export default HeroSection;
