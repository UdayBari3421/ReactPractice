import React from "react";
import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
          <div className="items-center flex justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="text-center lg:text-start my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
