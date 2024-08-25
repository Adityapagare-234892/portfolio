import React from "react";
import Image from "next/image";
import Link from "next/link";


const Skills = () => {
  return (
    <div>
      <div
        id="Skills"
        className="max-w-[1000px] h-[1200px] sm:h-[1000px] mx-auto sm:mt-12 mt-10 bg-white"
      >
        <div className="text-center">
          <h1 className="sm:text-2xl text-lg sm:mb-5 font-bold font-sans">
            SKILLS
          </h1>
          <p className="sm:text-5xl text-3xl sm:mb-8 font-bold font-serif mt-2">My Skills</p>
        </div>
        <div className="mx-8 sm:mx-auto font-bold">
          <div className="sm:gap-5 gap-x-4 gap-y-4 grid sm:grid-cols-4 grid-cols-2 sm:mb-12 sm:mx-20 mt-10 sm:mt-20">
            <div className="mx-auto px-12 py-10 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md">HTML</h1>
              </div>
              <Link href={"https://www.w3schools.com/html/"} target="_blank">
              <Image
                src={"/logo/html.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            
            <div className="mx-auto px-12 py-10 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md">Java Script</h1>
              </div>
              <Link href={"https://www.w3schools.com/js/js_intro.asp"} target="_blank">
              <Image
                src={"/logo/js.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            

           
            <div className="mx-auto px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md">CSS</h1>
              </div>
              <Link href={"https://www.w3schools.com/css/css_intro.asp"} target="_blank">
              <Image
                src={"/logo/social.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            <div className="mx-auto px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md"></h1>REACT
              </div>
              <Link href={"https://react.dev/"} target="_blank">
               <Image
                src={"/logo/React.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
               />
              </Link>
            </div>
          </div>

          <div className="sm:gap-5 gap-x-4 grid sm:grid-cols-4 grid-cols-2 sm:mx-16 mt-8 sm:mt-12">
            <div className="sm:mx-auto  px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md"></h1>NEXT.JS
              </div>
              <Link href={"https://nextjs.org/"} target="_blank">
              <Image
                src={"/logo/Next.js.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            <div className="mx-auto px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md"></h1>TAILWIND CSS
              </div>
              <Link href={"https://tailwindcss.com/"} target="_blank">
              <Image
                src={"/logo/Tailwind CSS.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            <div className="sm:mx-auto px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md"></h1>NODE JS
              </div>
              <Link href={"https://nodejs.org/en"} target="_blank">
              <Image
                src={"/logo/programing.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
            <div className="sm:mx-auto px-12 py-12 shadow-2xl">
              <div className="text-center my-5">
                <h1 className="text-md"></h1>TYPESCRIPT
              </div>
              <Link href={"https://www.typescriptlang.org/"} target="_blank">
              <Image
                src={"/logo/typescript.png"}
                width={100}
                height={100}
                alt="description of image"
                className="object-cover"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
