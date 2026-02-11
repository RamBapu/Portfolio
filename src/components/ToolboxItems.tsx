import { TechIcon } from "@/components/TechIcon";
import { IToolboxItem } from "@/sections/About";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ToolboxItemsProps {
  toolboxItems: IToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: ToolboxItemsProps) => {
  return (
    <div
      className={twMerge(
        "flex [maskimage:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}>
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName,
        )}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {toolboxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                <TechIcon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
