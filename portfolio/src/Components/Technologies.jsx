import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="grid grid-cols-3 lg:grid-cols-8 w-fit m-auto justify-center gap-4">
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiGit className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiGithubBadge className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiTailwindcss className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaJava className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiCplusplus className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaBootstrap className="text-7xl text-violet-800" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <TbSql className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaNodeJs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiPhp className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiCsharp className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FcLinux className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
