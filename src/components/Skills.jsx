import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#D3D3D3] #000000">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="inline text-[#8892b0] text-4xl font-bold border-b-4 border-[#4361ee] ">
            About Me
          </h2>
          <p className="py-3 text-[#494F55]">
            Hi i'm a self-taught front-end developer with a passion for crafting
            engaging and user-friendly UI/UX designs. I thrive on creating
            interactive and fun digital experiences that leave a lasting
            impression. See below for the technologies I am proficient in
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3 ">
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img className="w-20 mx-auto my-2" src={HTML} alt="HTML icon" />
            <p className="my-2 text-[#494F55]">HTML</p>
          </div>
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img className="w-20 mx-auto my-2" src={CSS} alt="HTML icon" />
            <p className="my-2 text-[#494F55]">CSS</p>
          </div>
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img
              className="w-20 mx-auto my-2"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-2 text-[#494F55]">JAVASCRIPT</p>
          </div>
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img className="w-20 mx-auto my-2" src={ReactImg} alt="HTML icon" />
            <p className="my-2 text-[#494F55]">REACT</p>
          </div>
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img className="w-20 mx-auto my-2" src={GitHub} alt="HTML icon" />
            <p className="my-2 text-[#494F55]">GITHUB</p>
          </div>
          <div className="flex align-center justify-between flex-col shadow-md shadow-[#494F55] hover:scale-110 duration-500 border-[#4361ee] border-2">
            <img className="w-20 mx-auto my-2" src={Tailwind} alt="HTML icon" />
            <p className="my-2 text-[#494F55]">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
