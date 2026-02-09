import { TechIcon } from "@/components/TechIcon";
import { IToolboxItem } from "@/sections/About";
import { twMerge } from "tailwind-merge";

interface IToolboxItems {
  toolboxItems: IToolboxItem[];
}

interface ToolboxItemsProps {
  toolboxItems: IToolboxItem[];
  className?: string;
}

export const ToolboxItems = ({
  toolboxItems,
  className,
}: ToolboxItemsProps) => {
  return (
    <div
      className={twMerge(
        "flex [maskimage:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}>
      <div className="flex flex-none py-0.5">
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
            <TechIcon component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
