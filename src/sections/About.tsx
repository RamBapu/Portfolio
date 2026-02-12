"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/js-icon.svg";
import ReactIcon from "@/assets/icons/react-icon.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import SocketIcon from "@/assets/icons/socket.svg";
import TanstackQueryIcon from "@/assets/icons/tanstack.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";
import DrizzleIcon from "@/assets/icons/drizzle.svg";
import ZustandIcon from "@/assets/icons/zustand.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import JWTIcon from "@/assets/icons/jwt.svg";
import MongooseIcon from "@/assets/icons/mongoose.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import MapImage from "@/assets/images/map-image.webp";
import smileMemoji from "@/assets/images/emoji-smile.png";
import { CardHeader } from "./CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

export interface IToolboxItem {
  title: string;
  icon: React.ElementType;
}

const firstToolboxItems: IToolboxItem[] = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    title: "Express",
    icon: ExpressIcon,
  },
  {
    title: "Vite",
    icon: ViteIcon,
  },
  {
    title: "NodeJS",
    icon: NodeJsIcon,
  },
  {
    title: "SocketIo",
    icon: SocketIcon,
  },
  {
    title: "Mongoose",
    icon: MongooseIcon,
  },
  {
    title: "TailwindCSS",
    icon: TailwindCSSIcon,
  },
  {
    title: "NextJS",
    icon: NextJSIcon,
  },
];

const secondToolboxItems: IToolboxItem[] = [
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    title: "Tanstack Query",
    icon: TanstackQueryIcon,
  },
  {
    title: "Postman",
    icon: PostmanIcon,
  },
  {
    title: "Postgres",
    icon: PostgresIcon,
  },
  {
    title: "DrizzleORM",
    icon: DrizzleIcon,
  },
  {
    title: "JWT",
    icon: JWTIcon,
  },
  {
    title: "Vercel",
    icon: VercelIcon,
  },
  {
    title: "Zustand",
    icon: ZustandIcon,
  },
];

const hobbies = [
  {
    title: "Finance",
    emoji: "📊",
    left: "5%",
    top: "5%",
  },
  {
    title: "Chess",
    emoji: "♔",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Walking",
    emoji: "🚶🏾‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Tech Workshops",
    emoji: "🎙️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          heading="A Glimpse into My World"
          description="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book-cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
                className=""
              />
              <ToolboxItems
                toolboxItems={firstToolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                toolboxItems={secondToolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2  px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    whileDrag={{ scale: 1.05 }}
                    whileHover={{ scale: 1.03 }}>
                    <span className="font-medium text-gray-950">
                      {" "}
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map-image"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smile-memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
