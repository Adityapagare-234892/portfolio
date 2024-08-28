import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import {Image} from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="max-w-full h-screen">
      <div className="flex justify-center items-center">
        <div className="w-full h-screen bg-[#222] flex justify-center items-center">
          <div>
            <h1 className="font-bold sm:text-4xl text-2xl my-5 text-[white] tracking-widest">
              Welcome to My Portfolio
            </h1>
            <div className="flex justify-center items-center">
            <Image 
                src={"/logo/Addy.jpg"}
               
                width={180}
                height={180}
                alt="Image"
                className="object-cover rounded-full sm:w-[250px] sm:h-[250px] "
              />
            </div>
            <h1 className="text-center sm:text-md  mt-5 text-white">My Self</h1>
            <h1 className="text-center sm:text-2xl text-3xl  mt-2 font-bold text-white">
              Aditya Pagare
            </h1>
            <h1 className="text-center sm:text-md text-md tracking-widest mt-2  text-white">
              A Front-End Web Developer
            </h1>
            <div className="text-center mt-3">
              <Button color="primary" variant="shadow">
                Contact
              </Button>
            </div>
            <div className="flex justify-center mt-10 sm:gap-8 gap-7 text-white">
              <div className="cursor-pointer hover:scale-125 ease-in duration-300 ">
                <Link href="" target="_blank">
                  <FaTwitter size={25} />
                </Link>
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                <Link
                  href="https://www.instagram.com/theadityapagare/"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </Link>
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                <Link
                  href="https://github.com/Adityapagare-234892"
                  target="_blank"
                >
                  <FaGithub size={25} />
                </Link>
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                <Link
                  href="https://www.instagram.com/theadityapagare/"
                  target="_blank"
                >
                  <FaFacebook size={25} />
                </Link>
              </div>
              <div className="cursor-pointer hover:scale-125 ease-in duration-300">
                <Link
                  href="https://www.linkedin.com/in/aditya-pagare-5695a51b9/"
                  target="_blank"
                >
                  <FaLinkedin size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
