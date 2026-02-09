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
  },
  {
    title: "Chess",
    emoji: "♔",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Walking",
    emoji: "🚶🏾‍♂️",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
  {
    title: "Tech Workshops",
    emoji: "🎙️",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          heading="A Glimpse into My World"
          description="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book-cover" />
            </div>
          </Card>
        </div>

        <Card className="h-[320px] p-0">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
            className="px-6 pt-6"
          />
          <ToolboxItems toolboxItems={toolboxItems} />
          <ToolboxItems toolboxItems={toolboxItems} />
        </Card>

        <Card>
          <CardHeader
            title="Beyond the Code"
            description="Explore my interest and hobbies beyond the digital realm."
          />
          <div>
            {hobbies.map((item) => (
              <div key={item.title}>
                <span>{item.title}</span>
                <span>{item.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Image src={MapImage} alt="map-image" />
          <Image src={smileMemoji} alt="smile-memoji" />
        </Card>
      </div>
    </div>
  );
};
