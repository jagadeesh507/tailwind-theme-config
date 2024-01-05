// import React from "react";

// function Button() {
//   return (
//     <div className="flex justify-center items-center pt-20">
//       <button className="border border-1 p-4 rounded-2xl bg-gray-100 hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out active:scale-95">
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Button;

"use client";
import { changeTheme } from "@/utils/helper";

export default function Home() {
  const themes = [
    { label: "light", value: " " },
    { label: "cyberpunk", value: "theme1" },
    { label: "dark", value: "theme2" },
    { label: "forest", value: "theme3" },
  ];
  const blogData = {
    category: "Theme",
    title: "Blog title heading will go here",
    dec: "A portfolio section on a website serves as a showcase for a person or business's work, accomplishments, and skills. Its purpose is to provide visitors with an idea of what they can expect from the individual or company",
    avatar: "./images/avatar.jpg",
    name: "Full Name",
    date: "11 jan 2022",
    time: "5 min read",
  };
  return (
    <div>
      <label
        htmlFor="theme"
        className="block mb-2 text-sm font-medium bg-buttons text-typography"
      >
        <h2 className="text-center text-bold text-2xl">
          Select an option to Change the theme you want
        </h2>
      </label>
      <select
        id="countries"
        onChange={(e) => changeTheme(e.target.value)}
        className="bg-gray-50 bg-buttons text-typography border rounded-lg focus:ring-buttons focus:border-buttons  w-full p-2.5"
      >
        {themes.map((theme, index) => (
          <option key={index} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
      <div className="p-6 md:p-20">
        <div className="flex flex-col gap-5">
          <p>Theme</p>
          <h1 className="text-4xl font-extrabold">Short heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 md:pt-20 pb-4 md:pb-10">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="border border-1 rounded-2xl p-4 shadow-md"
            >
              <img
                className="rounded-2xl w-full"
                src="./images/image.jpg"
                alt="Movie"
              />
              <div className=" text-left flex flex-col gap-5">
                <p>{blogData.category}</p>
                <h2 className="text-lg font-semibold">{blogData.title}</h2>
                <p className="line-clamp-2">{blogData.dec}</p>
                <div className="flex gap-4">
                  <div>
                    <div className="w-16 rounded-full">
                      <img src={blogData.avatar} alt="avatar" />
                    </div>
                  </div>
                  <div>
                    <p>{blogData.name}</p>
                    <p>
                      {blogData.date}{" "}
                      <span className="font-bold text-xl ">.</span>{" "}
                      <span>{blogData.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="border py-4 rounded-2xl w-28 md:w-32">
            view all
          </button>
        </div>
      </div>
    </div>
  );
}
