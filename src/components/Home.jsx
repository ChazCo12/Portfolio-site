import React from "react";
import { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo2 from "../assets/Pokelogo2.png";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#33d6a4] text-lg py-1">Hi there, my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Charlie Cohen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
          I'm a Front End Developer<span style={{ color: "#33d6a4" }}>.</span>
        </h2>
        <div>
          <Link to="work" duration={500} smooth={true}>
            <button className=" tracking-widest flex items-center  px-6 py-3 my-2 text-[#33d6a4] border-2 group border-[#33d6a4]">
              View Projects
              <span className="ml-2 duration-300 origin-center group-hover:rotate-90">
                <HiArrowNarrowRight className="text-lg" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
