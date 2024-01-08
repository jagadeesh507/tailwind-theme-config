import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-16 text-lg px-5 md:px-20 py-10 bg-background text-baseContent">
      <div className="w-full flex flex-col gap-y-5 justify-center items-center">
        <img className="w-1/3 mx-auto" src="./images/image2.jpg" />
        <h1 className="text-3xl font-extrabold">
          Sari Purdue <p>(she/her)</p>
        </h1>
        <p className="text-xl">Game Developer</p>
        <button className="border border-2 py-2 px-12 ">Email Me</button>
      </div>
      <div className="w-full flex flex-col gap-y-5">
        <h1 className="text-3xl font-extrabold">About Me</h1>
        <p>
          I am a tech-savvy individual with a Bachelor's degree in Software
          Development, seeking employment as a mobile game developer. I am
          passionate about consistently advancing my knowledge and skills. I
          have attended multiple seminars and boot camps on coding and game
          development.
        </p>
        <div className="flex gap-x-10">
          <button className="border border-2 py-2 px-12 ">Resume</button>
          <button className="border border-2 py-2 px-12 ">Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
