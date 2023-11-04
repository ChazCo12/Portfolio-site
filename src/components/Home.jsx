import React from "react";
import { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Pokelogo from "../assets/Pokelogo2.png";
import { useProductsContext } from "../context/context";
const Home = () => {
  const { fetchPokemon, closePopup, sprite, popup, showPopup } =
    useProductsContext();
  const [showSprite, setShowSprite] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const startSpinning = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  }, []);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#33d6a4] text-2xl py-1">Hi there, my name is</p>
        <h1 className=" text-6xl sm:text-7xl font-bold text-[#ccd6f6]">
          Charlie Cohen
        </h1>
        <p className=" block md:hidden text-4xl sm:text-5xl font-bold text-[#8892b0] pb-3">
          I'm a Front End Developer
          <span style={{ color: "#33d6a4" }}>.</span>
        </p>
        <div className="z-0 flex hidden h-20 overflow-hidden md:block">
          <p className="hidden md-block text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
            I'm a
          </p>
          <div className="words">
            <span className=" magic-words text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
              Front End Developer<span style={{ color: "#33d6a4" }}>.</span>
            </span>
            <span className=" magic-words text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
              UI Designer<span style={{ color: "#33d6a4" }}>.</span>
            </span>
            <span className=" magic-words text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
              UX Designer<span style={{ color: "#33d6a4" }}>.</span>
            </span>
            <span className=" magic-words text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
              Great Guy :)<span style={{ color: "#33d6a4" }}>.</span>
            </span>
            <span className=" magic-words text-4xl sm:text-7xl font-bold text-[#8892b0] pb-3">
              Front End Developer<span style={{ color: "#33d6a4" }}>.</span>
            </span>
          </div>
        </div>
        <div className="flex items-center align-middle">
          <Link to="work" duration={500} smooth={true}>
            <button className=" tracking-widest flex items-center mx-2  px-4 py-2 my-2 text-[#33d6a4] border-2 group border-[#33d6a4]">
              View Projects
              <span className="ml-2 duration-300 origin-center group-hover:rotate-90">
                <HiArrowNarrowRight className="text-lg" />
              </span>
            </button>
          </Link>
          <div className="block ml-6 md:hidden">
            <img
              src={Pokelogo}
              alt=""
              className={` cursor-pointer mr-28 w-12   ${
                isSpinning ? "spin-animation" : ""
              }`}
              onClick={() => {
                startSpinning();
                showPopup();
                setTimeout(() => {
                  setShowSprite(true);
                  closePopup();
                }, 4000);
              }}
            />
            {showSprite ? (
              <img
                className="absolute left-0 top-20 w-17"
                src={sprite}
                alt=""
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
