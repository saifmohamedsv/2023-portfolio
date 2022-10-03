import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 mt-2 md:mt-0 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src={urlFor(experience?.companyImage).url()}
        alt="profile image cool guy tiktok"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1 text-[#02a9f7]">
          @ {experience?.company}
        </p>
        <div className="grid grid-cols-4 my-2">
          {experience?.technologies?.map((technology, idx) => (
            <img
              key={technology?._id}
              alt="technology"
              className="h-10 w-10 rounded-full mt-2"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points?.map((point, idx) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
