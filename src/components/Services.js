import React from "react";
import  { FaLaptop, } from "react-icons/fa";
import { FaGears} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";


const Services = () => {
  return (
    <div>
      <div id="Services" className="max-w-[1300px]   mx-auto">
        <div className="text-center font-bold sm:text-2xl text-lg sm:py-10 cursor-pointer hover:underline underline-offset-[16px] pt-12  pb-5 font-serif">
          <h1>SERVICES</h1>
        </div>
        <h3 className="text-center text-2xl sm:text-3xl">WHAT CAN I DO</h3>

        <div className="pt-12 ">

          <div className="grid sm:grid-cols-3  mx-12 grid-cols-1 sm:gap-x-16 gap-y-5 sm:mx-auto my-7  text-center ">

            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-10 sm:mx-auto mx-auto sm:mb-8 md:w-10 w-16 ">
                <FaLaptop size={40} className="mx-auto" />
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase ">
                UI/UX designer
              </h1>
              <p className="text-sm">
              UX Designers combine the art of design and technology to create meaningful, enjoyable, and effective user experiences.
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>

            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-20 sm:mx-auto mx-auto sm:mb-8 md:w-20 w-16">
              <FaGears size={40} className="mx-auto"/>
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase">
                Web Development
              </h1>
              <p className="text-sm">
                Web development, also known as website development, is the process of creating, building, and maintaining websites and web applications that run on a browser.
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>

            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-10 sm:mx-auto mx-auto sm:mb-8 md:w-10 w-16">
              <FaMobileAlt size={40} className="mx-auto"/>
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase">
                Responsive Design
              </h1>
              <p className="text-sm">
              a web development approach that allows a website to adapt to different devices and screen sizes while maintaining its usability and appearance.
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>

          </div>

          {/* First row end */}

          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-16 gap-y-5 mx-12 sm:mx-auto my-7 text-center">
            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-10 sm:mx-auto mx-auto sm:mb-8 md:w-10 w-16">
              <MdOutlineDesignServices size={40} className="mx-auto"/>
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase">
                Creative Design
              </h1>
              <p className="text-sm">
                LCreative design in website design is the process of creating a website's visual layout and aesthetics to reflect a company's brand and provide a positive user experience.
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>

            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-10 sm:mx-auto mx-auto sm:mb-8 md:w-10 w-16">
              <GiSpanner size={40} className="mx-auto"/> 
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase">
                Support
              </h1>
              <p className="text-sm">
              web support professionals help ensure that your site is always running smoothly and meeting the needs of your website.
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>

            <div className="sm:p-16 px-12 py-12 sm:hover:bg-[#e2e2e2]  border-[1px] border-black rounded-xl">
              <div className="sm:w-10 sm:mx-auto mx-auto sm:mb-8 md:w-10 w-16">
              <MdOutlineDesignServices size={40} className="mx-auto"/>
              </div>
              <h1 className="font-bold font-sans text-md sm:text-lg my-5 uppercase">
                Photoshop
              </h1>
              <p className="text-sm">
              Adobe Photoshop is a graphic design and image editing program that can be used to create website mockups
              </p>
              <div className="mt-8 bg-black rounded-md py-2 mx-2  text-white">
              <button><h1 className="text-md font-sans ">Learn More</h1></button>
              </div>
            </div>
          </div>

         {/* Second row End */}

        </div>
      </div>
    </div>
  );
};

export default Services;
