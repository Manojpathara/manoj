import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="sm:mr-2 md:max-w-[1240px] h-[90px] md:ml-[90px]">
      <div className="max-w-[1240px] mx-4  px-4 flex justify-between items-center h-full font-arial bg-white dark:bg-[#0f172a] text-black dark:text-white">
          <h1 className=" lg:ml-20 text-4xl">MANOJ PM</h1>
        <div className="md:mr-[20px] md:ml-40">
          <ul className=" hidden md:flex text-2xl px-2">
            <li className=" hover:text-cyan-500"> <Link to="/">Home</Link></li>
            <li className=" hover:text-cyan-500"> <Link to="/about"> About </Link></li>
            <li className=" hover:text-cyan-500"> <Link to="/projects">Projects</Link></li>
            <li className=" hover:text-cyan-500"> <Link to="">Contact </Link></li>
            <li
              onClick={handleThemeSwitch}
              className="cursor-pointer hover:text-cyan-500"
            >
              {theme === "dark" ? (
                <BsMoonFill size={30} />
              ) : (
                <BsSunFill size={30} />
              )}
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className=" block md:hidden mr-2">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
          className={
            nav
              ? " block text-2xl bg-white bg-opacity-90 dark:bg-[#0f172a] w-[60%] h-screen rounded-2xl md:hidden absolute top-[100px] left-0 p-5 ease-in-out duration-500"
              : "absolute left-[-100%]"
          }
        >
          <ul className="">
            <li className="mb-7  hover:text-cyan-500"><Link to="/">Home</Link></li>
            <li className="mt-6 mb-7  hover:text-cyan-500"><Link to="/about"> About </Link></li>
            <li className="mb-7  hover:text-cyan-500"><Link to="/projects">Projects</Link></li>
            <li className="mb-7  hover:text-cyan-500">Contact</li>
            <li
              onClick={handleThemeSwitch}
              className="cursor-pointer  hover:text-cyan-500"
            >
              {theme === "dark" ? (
                <BsMoonFill size={30} />
              ) : (
                <BsSunFill size={30} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
