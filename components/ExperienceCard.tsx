import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src="https://cdn.sanity.io/images/w8smplyk/production/7c0908a2f0e9281d32f5f25bbc5c023887505a7a-1920x1080.jpg"
        alt="profile image cool guy tiktok"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of shaqa</h4>
        <p className="font-bold text-2xl mt-1">Shaqa</p>
        <div className="flex space-x-2 my-2">
          <img
            alt="technology"
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/w8smplyk/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
          />
          <img
            alt="technology"
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/w8smplyk/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
          />
          <img
            alt="technology"
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/w8smplyk/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          Started Work...- Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
            cum est quam nemo
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
            cum est quam nemo Lorem
          </li>{" "}
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
            cum est quam nemo
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
