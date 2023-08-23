import React from "react";
import Hotal from '../assets/hotal.jpg'
import Travel from '../assets/travel.jpg'
import Blog from '../assets/blog.jpg'
export default function Project() {
  return (
    <div className="w-full h-full pb-2 md:h-screen text-center font-arial">
      <p className="text-sm font-thin text-gray m-10 mb-5">Browse My Recent</p>
      <h1 className="md:mb-20 text-4xl font-bold-md">Projects</h1>
      <div className="grid m-4 md:grid-cols-3 gap-2 mt-4">
        <div className="border-2 border-black dark:border-[#78716c] rounded-2xl grid justify-items-center ">
          <h1 className="text-2xl font-bold-md my-4">Hotal</h1>
          <img
            className="max-w-[250px]  rounded-[1.3rem] m-2   "
            src={Hotal}
            alt=""
          />
          <div className="grid-cols-2">
          <button className="bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-3xl py-2 px-4 m-2">
            Github
          </button>
          <button className="border-2 border-black py-2 px-2 m-2 bg-black dark:bg-white  text-white dark:text-black dark:border-white rounded-3xl">
            Live Demo
          </button>
          </div>
        </div>
        <div className="border-2 border-black dark:border-[#78716c] rounded-2xl grid justify-items-center ">
          <h1 className="text-2xl font-bold-md my-4">Blog</h1>
          <img
            className="max-w-[250px]  rounded-[1.3rem] m-2   "
            src={Blog}
            alt=""
          />
          <div className="grid-cols-2">
          <button className="bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-3xl py-2 px-4 m-2">
            Github
          </button>
          <button className="border-2 border-black py-2 px-2 m-2 bg-black dark:bg-white  text-white dark:text-black dark:border-white rounded-3xl">
            Live Demo
          </button>
          </div>
        </div>
        <div className="border-2 border-black dark:border-[#78716c] rounded-2xl grid justify-items-center ">
          <h1 className="text-2xl font-bold-md my-4">Travel</h1>
          <img
            className="max-w-[250px]  rounded-[1.3rem] m-2   "
            src={Travel}
            alt=""
          />
          <div className="grid-cols-2">
          <button className="bg-transparent border-2 border-black dark:border-white text-black dark:text-white rounded-3xl py-2 px-4 m-2">
            Github
          </button>
          <button className="border-2 border-black py-2 px-2 m-2 bg-black dark:bg-white  text-white dark:text-black dark:border-white rounded-3xl">
            Live Demo
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
