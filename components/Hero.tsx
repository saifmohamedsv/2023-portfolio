import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm ${pageInfo?.name}`, pageInfo?.role, "<React.js />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className={
        "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      }
    >
      <BackgroundCircles />
      <img
        className={
          "relative rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover "
        }
        src={urlFor(pageInfo?.heroImage).url()}
        alt={"profile picture"}
      />
      <div className={"z-20"}>
        <h2
          className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px] lin"}
        >
          {pageInfo?.role}
        </h2>
        <h1 className={"text-4xl md:text-6xl font-semibold px-2 md:px-10"}>
          <span className={"mr-3"}>{text}</span>
          <Cursor cursorColor={"#F7AB0A"} />
        </h1>
        <div className={"pt-5 space-x-4 space-y-4"}>
          <Link href={"#about"}>
            <button className={"heroButton"}>About</button>
          </Link>
          <Link href={"#experience"}>
            <button className={"heroButton"}>Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className={"heroButton"}>Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className={"heroButton"}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
