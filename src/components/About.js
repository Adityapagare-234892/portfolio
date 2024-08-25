import React from "react";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const About = () => {
  return (
    <div id="About"  >
      <div className="max-w-[1300px] mx-auto  sm:my-28 md:my-28 mt-16 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-black bg-white md:flex">
        <div className="md:shrink-0 shadow-2xl">
          <Image
            src="/images/profile.jpg"
            alt="/"
            width={400}
            height={300}
            className=" sm:shadow-lg hover:scale-110 duration-1000 overflow-hidden sm:shadow-black h-[350px] object-cover w-full md:w-[525px] sm:w-[525px] md:h-full sm:h-full sm:ml-5 rounded-lg "
          />
        </div>
        <div className=" mb-14 mx-6 sm:ml-16 ">
          <div className=" mt-8 sm:mb-16 text-center sm:ml-6  sm:text-left">
            <h1 className="font-bold font-serif text-3xl pb-10 sm:pb-5 md:text-5xl ">
              ABOUT ME
            </h1>
          </div>
          <div className="mb-16 sm:ml-6 text-sm sm:text-md text-center sm:text-left">
            <p className="sm:mr-16">
              Hello! I&#39;m Aditya Pagare. I&#39;m a web developer, and I&#39;m very
              passionate and dedicated to my work. With 20 years experience as a
              professional web developer, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every
              step of the design process, from discussion and collaboration.
            </p>
          </div>
          <div>
            <div className="flex sm:col-span-2 col-span-1 gap-5   mb-5 mx-5 text-sm font-bold">
              <div>
                <KeyboardDoubleArrowRightIcon />
                Web Development
              </div>
              <div>
                <KeyboardDoubleArrowRightIcon />
                Social Development
              </div>
            </div>
            <div className="flex sm:col-span-2 gap-5 mx-5 col-span-1 text-sm font-bold">
              <div>
                <KeyboardDoubleArrowRightIcon />
                App Development
              </div>
              <div>
                <KeyboardDoubleArrowRightIcon />
                Page Development
              </div>
            </div>
          </div>
          <div className="mt-5 text-center rounded-md sm:ml-6 sm:mt-8 sm:text-sm font-medium bg-[#222] py-2 px-4 text-white sm:w-36 ">
            <a href="/images/Dummy.pdf">DOWNLOAD CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
