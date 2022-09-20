import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3
        className={
          "text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl"
        }
      >
        Projects
      </h3>

      <div
        className={
          "relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#02a9f7] scrollbar-thin"
        }
      >
        {[1, 2, 3, 4].map((proj) => (
          <div
            key={proj}
            className={
              "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
            }
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={
                "https://s3.envato.com/files/243421881/_Website%20Presentation_Image%20Preview.jpg"
              }
              alt={"Project Thumbnail"}
            />
            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#02a9f7]"}>
                  Case Study ({proj}/3):{" "}
                </span>{" "}
                MegaFlix
              </h4>
              <p className={"text-lg text-center md:text-left"}>
                Megaflix is a netflix clone where you can find the latest movies
                and series and play trailers
              </p>
            </div>
          </div>
        ))}
        {/*projects*/}
      </div>

      <div
        className={
          "w-full absolute top-[30%] bg-[#02a9f7]/10 left-0 h-[500px] -skew-y-12"
        }
      />
    </motion.div>
  );
}

export default Projects;
