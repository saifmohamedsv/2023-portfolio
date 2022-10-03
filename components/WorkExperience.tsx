import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative flex items-center overflow-hidden flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#02a9f7] scrollbar-thin"
    >
      <h3 className="text-gray-500 absolute top-16 md:top-24 opacity-20 uppercase tracking-[10px] text-sm md:text-2xl">
        Experience
      </h3>

      <div className="flex w-full space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#02a9f7] scrollbar-thin">
        {experiences?.reverse().map((experience, idx) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
