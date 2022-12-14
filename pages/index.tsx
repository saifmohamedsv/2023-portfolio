import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ skills, experiences, socials, pageInfo, projects }: Props) => {
  return (
    <div
      className={
        "bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#02a9f7] scrollbar-thin"
      }
    >
      <Head>
        <title>Saif Mohamed</title>
        <meta
          name="description"
          content="Saif Mohamed - Modern Portfolio built using Next.js / Typescript and backend using sanity platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id={"hero"} className={"snap-start"}>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id={"about"} className={"snap-center"}>
        <About pageInfo={pageInfo} />
      </section>

      <section id={"experience"} className={"snap-center"}>
        <WorkExperience experiences={experiences} />
      </section>

      <section id={"skills"} className={"snap-start"}>
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <footer
        className={"sticky bottom-16 md:bottom-5 right-5 w-full cursor-pointer"}
      >
        <div className={"flex items-center justify-center"}>
          <Link href={"#hero"}>
            <img
              className={
                "h-10 w-10 object-cover rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              }
              src={urlFor(pageInfo?.profilePic).url()}
              alt={"Footer Logo"}
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  return {
    props: {
      pageInfo,
      skills,
      experiences,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
