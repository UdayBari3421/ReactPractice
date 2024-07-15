import React from "react";
import logo from "../assets/Uday.png";
import { FaInstagram, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import file from "../assets/UdayBariResume.pdf";

const Navbar = () => {
  return (
    <nav className="border-b border-t rounded-3xl border-slate-800 before:bg-black before:w-full backdrop-blur before:content-none sticky z-10 top-0 left-10 right-10 flex items-center justify-between p-2">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href={file} download={file} className="text-sm bg-neutral-800 px-2 py-1 rounded hover:text-black hover:bg-blue-500">
          <button>Resume</button>
        </a>
        <a className="hover:cursor-pointer hover:text-blue-500 " href="https://www.linkedin.com/in/uday-bari-003530221/" target="_blank">
          <FaLinkedin />
        </a>
        <a className="hover:cursor-pointer rounded-full hover:bg-black hover:text-white" href="https://github.com/UdayBari3421" target="_blank">
          <FaGithub />
        </a>
        <a className="hover:cursor-pointer hover:text-pink-500" href="https://t.me/udaybari" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
