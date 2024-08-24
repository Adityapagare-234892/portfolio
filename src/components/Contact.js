"use client";

import { Input } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div id="Contact" className="max-w-[1300px] h-[800px] mx-auto">
        <div className="text-center">
          <div className="sm:pt-20 sm:mb-12 ">
            <h1 className="font-bold font-sans sm:text-5xl text-3xl">
              CONTACT
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="mt-20">
              <h1 className="sm:text-[120px] text-4xl font-serif sm:px-32 sm:text-left leading-none">
                GET IN TOUCH
              </h1>
            </div>
            <div className="mt-20 px-10">
              <form action="">
                <div className="grid sm:grid-cols-2 w-full sm:justify-center text-center sm:gap-10 gap-5 mb-5 ">
                  <input
                    type="text"
                    name="first_Name"
                    placeholder="First Name"
                    required={true}
                    className="form-control px-5 py-2 sm:px-5 sm:py-3 border-2  border-gray-300 rounded-md "
                  />
                  <input
                    type="text"
                    name="last_Name"
                    placeholder="Last Name"
                    required={true}
                    className=" form-control   py-2 px-5 sm:py-3 border-2 border-gray-300 rounded-md "
                  />
                </div>

                <input
                  type="Email Address"
                  name="email"
                  placeholder="Email address"
                  required={true}
                  className=" form-control py-2 sm:py-3 px-5 sm:mt-8 w-full border-2 border-gray-300 rounded-md mb-5"
                />
                <input
                  type="Subject"
                  name="subject"
                  placeholder="Enter Subject"
                  required={true}
                  className=" form-control py-2 sm:py-4 px-6 sm:mt-8 w-full border-2 border-gray-300 rounded-md mb-5"
                />
                <textarea
                  rows={3}
                  name="Message"
                  id="description"
                  placeholder="Your Message"
                  className=" form-control py-2 sm:py-4 px-6 sm:mt-8 w-full border-2 border-gray-300 rounded-md"
                ></textarea>
                
                <button type="submit" 
                className=" mt-5 sm:mt-10 sm:px-8 py-4 w-full  border-black rounded-md sm:text-xl bg-[#222] text-white ">
                  Send Message</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
