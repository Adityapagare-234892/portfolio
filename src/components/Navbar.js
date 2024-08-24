"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed z-50 bg-white  w-full h-20 shadow-xl">
      <div className="flex items-center  justify-evenly w-full h-full text-center pt-auto 2xl:px-10">
        <div className="mr-24">
        <Image
          src="/logo/aditya.png"
          width={80}
          height={80}
          alt="Picture of the author"
        />
        </div>
        <nav className=" hidden md:flex font-bold text-xs ml-56 mr-12 tracking-widest ">
          <Link href="#HeroSection" className="mx-3 hover:underline underline-offset-8">
            HOME
          </Link>
          <Link
            href="#About"
            className="mx-3 hover:underline underline-offset-8"
          >
            ABOUT
          </Link>
          <Link
            href="#Skills"
            className="mx-3 hover:underline underline-offset-8"
          >
            SKILL
          </Link>
          <Link
            href="#Services"
            className="mx-3 hover:underline underline-offset-8"
          >
            SERVICES
          </Link>
          <Link
            href="#Project"
            className="mx-3 hover:underline underline-offset-8"
          >
            PROJECT
          </Link>
          <Link
            href="#Contact"
            className="mx-3 hover:underline underline-offset-8"
          >
            CONTACT
          </Link>
        </nav>

        

        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/logo/aditya.png"
                width={70}
                height={70}
                alt="Picture of the author"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] sm:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="font-medium">
              <Link href="#HeroSection" className="mx-3">
                <li className="py-3 ">HOME</li>
              </Link>
              <Link href="#About" className="mx-3">
                <li className="py-3 ">ABOUT</li>
              </Link>
              <Link href="#Skills" className="mx-3">
                <li className="py-3 ">SKILL</li>
              </Link>
              <Link href="#Services" className="mx-3">
                <li className="py-3 ">SERVICES</li>
              </Link>
              <Link href="#Resume" className="mx-3">
                <li className="py-3 ">PROJECT</li>
              </Link>
              <Link href="#Contact" className="mx-3">
                <li className="py-3 ">CONTACT</li>
              </Link>
            </ul>

            <div className="pt-28">
              <p className="uppercase tracking-widest text-[black]">
                Let&#39;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter alt />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram href="https://www.instagram.com/theadityapagare" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebook />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn href="https://www.google.com" alt/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
