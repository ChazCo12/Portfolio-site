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
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="inline text-4xl font-bold border-b-4 border-[#33d6a4] ">
            About Me
          </h2>
        </div>
        <div>
          <p className="py-4 text-[#8892b0]">
            I am a frontend developer from guernsey working mainly with react
            and tailwind css
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
