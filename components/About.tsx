import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={
        "relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl"
        }
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={
          "-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        }
        src={
          "https://cdn.sanity.io/images/w8smplyk/production/7c0908a2f0e9281d32f5f25bbc5c023887505a7a-1920x1080.jpg"
        }
      />

      <div className={"space-y-10 px-0 md:px-10"}>
        <h4 className={"text-4xl font-semibold"}>
          Here is a{" "}
          <span className={"underline decoration-[#02a9f7]"}>little </span>{" "}
          background
        </h4>
        <p className={"text-sm"}>
          I'm Saif. ⚡️ I'm a 20y old Software Engineer. I've been coding for 4
          years now. As a Front-end Engineer I worked with startups and
          mid-scale corporations to help buld & scale their companies. Along the
          journey I realised my passion existed in being a great software
          engineer and help others pursue their dreams being developers. ⭐️{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
