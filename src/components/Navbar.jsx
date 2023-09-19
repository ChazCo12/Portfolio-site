import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Personal-logo-2.png";
import Pokelogo from "../assets/Pokelogo2.png";
import { Link } from "react-scroll";
import { useProductsContext } from "../context/context";

const Navbar = () => {
  const { fetchPokemon, closePopup, sprite, popup, showPopup } =
    useProductsContext();
  const [showSprite, setShowSprite] = useState(false);
  const [nav, setNav] = useState(false);
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

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between align-middle items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "55px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="links">
          <Link to="home" smooth={true} duration={500}>
            Homes
          </Link>
        </li>
        <li className="links">
          <Link to="skills" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="links">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="links">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {showSprite ? (
          <img className="absolute left-0 top-20 w-17" src={sprite} alt="" />
        ) : null}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars style={{ width: "55px" }} /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-transparent">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-transparent">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/ChazCo12"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" duration={500} smooth={true}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-transparent">
              <a className="flex items-center justify-between w-full text-gray-300">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li>
            <img
              src={Pokelogo}
              alt=""
              className={`mt-2 cursor-pointer mr-28 w-7   ${
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
