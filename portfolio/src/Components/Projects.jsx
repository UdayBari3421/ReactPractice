import React from "react";
import { PROJECTS } from "../constants";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-20 flex flex-col flex-wrap justify-center border-b border-neutral-900">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
        Projects
      </motion.h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, index) => (
          <div key={index} className="lg:w-full lg:m-8 my-2 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4 flex justify-center items-center">
              <img className="rounded" src={project.image} width={150} height={150} alt={project.title} />
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="flex gap-6 flex-col flex-wrap w-xs max-2xl lg:w-8/12">
              <h6 className="flex w-full justify-between font-semibold">
                <a href={project.github} target="_blank">
                  {project.title}
                </a>
                <span className="flex gap-5">
                  <a className="hover:cursor-pointer hover:text-black rounded-full p-2 hover:bg-white" href={project.github} target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                  </a>
                  {project.livelink && (
                    <a className="hover:cursor-pointer hover:text-black rounded-full p-2 hover:bg-white" href={project.livelink} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </span>
              </h6>
              <p className="text-neutral-400">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="border w-fit rounded-2xl bg-neutral-900 border-purple-500 ring-1 shadow-md shadow-red-400 px-2 py-1 text-sm font-medium text-purple-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
