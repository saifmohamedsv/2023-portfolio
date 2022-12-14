import { motion } from "framer-motion";
import React from "react";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directorLeft?: boolean;
  skill: Skill;
};

function Skill({ directorLeft, skill }: Props) {
  return (
    <div className="relative flex items-center justify-center group cursor-pointer">
      <motion.img
        initial={{ x: directorLeft ? -400 : 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={urlFor(skill?.image).url()}
        className="w-24 h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 p-4 object-cover rounded-full border border-gray-500/50 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress} %
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
