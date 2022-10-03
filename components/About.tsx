import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={
        "relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "text-gray-500 absolute top-16 md:top-24 opacity-30 uppercase tracking-[20px] text-lg md:text-2xl"
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
          "-mb-32 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        }
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className={"space-y-10 px-0 md:px-10"}>
        <h4
          className={
            "text-4xl tracking-[4px] md:tracking-normal md:text-4xl font-semibold"
          }
        >
          Here is a{" "}
          <span className={"underline decoration-[#02a9f7]"}>little </span>{" "}
          background
        </h4>
        <p className={"text-sm"}>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
