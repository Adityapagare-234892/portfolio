import React from "react";

const Project = () => {
  return (
    <div id="Project" className="my-32">
      <div className="w-full h-[270px]  md:flex text-white flex justify-center items-center bg-[#000000]">
        <div>
          <h1 className="sm:text-[30px] text-lg font-sans font-bold text-center">
            Have a project on your mind.
          </h1>
          <div className="px-5 sm:mx-56 mt-5">
            <p className="text-[12px] sm:text-lg text-center ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly.
            </p>
          </div>
          <div className="text-center text-black mt-5 py-2 rounded-lg sm:mx-auto w-[130px] mx-36 bg-white">
            <button className="font-sans font-semibold">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
