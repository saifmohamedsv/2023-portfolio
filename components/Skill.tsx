import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {
  directorLeft?: boolean;
};

function Skill({ directorLeft }: Props) {
  return (
    <div className="relative flex items-center justify-center group cursor-pointer">
      <motion.img
        initial={{ x: directorLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://cdn.sanity.io/images/w8smplyk/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
        className="w-24 h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 object-cover rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
