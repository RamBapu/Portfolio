import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/js-icon.svg";
import ReactIcon from "@/assets/icons/react-icon.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import MapImage from "@/assets/images/map-image.webp";
import smileMemoji from "@/assets/images/emoji-smile.png";
import { CardHeader } from "./CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

export interface IToolboxItem {
  title: string;
  icon: React.ElementType;
}

const toolboxItems: IToolboxItem[] = [
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
    title: "NodeJS",
    icon: NodeJsIcon,
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
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
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
              <div className="relative flex-1">
                {hobbies.map((item) => (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-2  px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}>
                    <span className="font-medium text-gray-950">
                      {" "}
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map-image"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
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
