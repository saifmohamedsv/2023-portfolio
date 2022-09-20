import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="relative flex flex-col items-center justify-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3
        className={
          "text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl"
        }
      >
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill directorLeft />
        <Skill directorLeft />
        <Skill directorLeft />
        <Skill directorLeft />
        <Skill directorLeft={false} />
        <Skill directorLeft={false} />
        <Skill directorLeft={false} />
        <Skill directorLeft={false} />
      </div>
    </motion.div>
  );
}

export default Skills;
