import React from "react";
import django from "../assets/django.jpg";
import { FaMedal } from "react-icons/fa";

export default function About() {
  return (
    <div className="m-5 h-screen">
      <div className="w-full text-center text-black-200">
        
        <h1 className=" text-5xl font-thin font-arial p-3 mb-10">About</h1>
      </div>

      <div className="md:m-20 space-y-2 space-x-2 md:grid gap-2 grid-cols-3 md:grid-rows-2 md:items-center md:justify-items-center">
        {/* image */}
        <div className="grid justify-items-center md:row-span-2 md:grid gap-2 md:items-center md:justify-items-end ">
          <img
            className="max-w-[250px]  rounded-[1.3rem] mb-4  "
            src={django}
            alt=""
          />
        </div>
        <div className="w-full border-2 border-black dark:border-[#78716c] rounded-[1.3rem] p-2  grid justify-items-center">
          <FaMedal size={30} />
          <h1>Experience</h1>
          <p>2 years Web Development</p>
        </div>
        <div className="w-full border-2 border-black dark:border-[#78716c] rounded-[1.3rem] p-2 grid justify-items-center">
          <FaMedal size={30} />
          <h1>Experience</h1>
          <p>2 years Web Development</p>
        </div>
        <div className="w-full md:grid col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dignissimos ipsum fugit possimus provident ab eius voluptatem pariatur
          nobis, libero nam at sequi eum, laudantium consequuntur accusantium
          similique eos. Perspiciatis? Lorem, ipsum dolor sit amet consectetur
         
        </div>
      </div>
    </div>
  );
}
