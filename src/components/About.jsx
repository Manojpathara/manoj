import React from "react";
import django from "../assets/django.jpg";
import { FaMedal } from "react-icons/fa";

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet">
</link>

export default function About() {
  return (
    <div className="m-5 pb-4">
      <div className="w-full text-center text-black-200">
        <h1 className=" text-5xl font-thin font-Roboto p-3">About</h1>
      </div>

      <div className="md:m-20 space-y-2 space-x-2 md:grid gap-2 grid-cols-3 md:grid-rows-2 md:items-center md:justify-items-center">
        {/* image */}
        <div className="grid justify-items-center md:row-span-2 md:grid gap-2 md:items-center md:justify-items-end ">
          <img
            className="max-w-[300px]  rounded-[1.3rem] mb-4  "
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
          As a Python Full Stack Web Developer, I bring a versatile skill set
          and a passion for creating dynamic and responsive web applications.
          With a strong foundation in both front-end and back-end development, I
          have the expertise to design intuitive user interfaces using modern
          technologies like HTML, CSS, JavaScript, and React. My proficiency in Python
          enables me to craft efficient server-side logic and build robust APIs
          using frameworks such as Flask and Django. I am experienced in
          database design and management, utilizing SQL and NoSQL databases to
          ensure seamless data integration. Additionally, my knowledge of
          version control systems like Git and collaborative tools enhances my
          ability to work effectively within development teams. By combining
          creativity and technical acumen, I consistently strive to deliver
          user-centered, high-performance web solutions that meet both client
          needs and industry standards.
        </div>
      </div>
    </div>
  );
}
