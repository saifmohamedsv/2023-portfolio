import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
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
        {skills?.slice(0, skills?.length / 2).map((skill, idx) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills?.length / 2, skills?.length).map((skill, idx) => (
          <Skill key={skill._id} skill={skill} directorLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
