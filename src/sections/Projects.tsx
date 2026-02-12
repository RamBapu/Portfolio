import chatifyLandingPage from "@/assets/images/chatify.png";
import ideationLandingPage from "@/assets/images/ideation.png";
import productifyLandingPage from "@/assets/images/productify.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import ReactIcon from "@/assets/icons/react-icon.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import SocketIcon from "@/assets/icons/socket.svg";
import JWTIcon from "@/assets/icons/jwt.svg";

import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import ClerkIcon from "@/assets/icons/clerk.svg";
import MotionIcon from "@/assets/icons/framer-motion.svg";

import TanstackQueryIcon from "@/assets/icons/tanstack.svg";
import DrizzleIcon from "@/assets/icons/drizzle.svg";

import { TechIcon } from "@/components/TechIcon";

const portfolioProjects = [
  {
    company: "Real time chat application",
    year: "2026",
    title: "Chatify",
    results: [
      { title: "Token-based authentication using cookies" },
      { title: "Real-time messaging with live online status" },
      { title: "Text & image chats with optimistic updates" },
    ],
    techIcons: [
      MongoDBIcon,
      ExpressIcon,
      ReactIcon,
      NodeJsIcon,
      SocketIcon,
      JWTIcon,
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: chatifyLandingPage,
    githubLink: "https://github.com/RamBapu/chatify",
  },
  {
    company: "AI Notes app with Autocomplete",
    year: "2026",
    title: "Ideation",
    results: [
      { title: "AI Image generation based on Notes title" },
      { title: "Text Autocompletion by Google Gemini" },
      { title: "Advanced text input with rich formatting" },
    ],
    techIcons: [
      NextJSIcon,
      TypeScriptIcon,
      TailwindCSSIcon,
      ClerkIcon,
      MotionIcon,
      PostgresIcon,
    ],
    link: "https://ideation-qgcqp24v0-rams-projects-35ff88a9.vercel.app/",
    image: ideationLandingPage,
    githubLink: "https://github.com/RamBapu/Ideation",
  },
  {
    company: "Product Store application",
    year: "2026",
    title: "Productify",
    results: [
      { title: "Secure Role based Access Control (RBAC)" },
      { title: "Scalable relational product database" },
      { title: "Seamless constistent UI theme styling" },
    ],
    techIcons: [
      PostgresIcon,
      ExpressIcon,
      ReactIcon,
      NodeJsIcon,
      TanstackQueryIcon,
      DrizzleIcon,
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: productifyLandingPage,
    githubLink: "https://github.com/RamBapu/productify",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real World Projects"
          heading="Featured Projects"
          description="Have a deeper dive into the projects I built"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${index * 40}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-row gap-2 mt-6">
                    {project.techIcons?.map((icon) => (
                      <li className="outline outline-2 outline-white/30 rounded-lg text-center p-1 ">
                        <TechIcon component={icon} />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl cursor-pointer ">
                        <span>Live Demo</span>
                        <ArrowRightUpIcon className="size-4" />
                      </button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer">
                        <span>Visit GitHub</span>
                        <ArrowRightUpIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  {/* <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8">
                      <ArrowRightUpIcon className="size-4" />
                      <span>View Live Demo</span>
                    </button>
                  </a> */}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
