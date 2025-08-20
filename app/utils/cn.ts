import * as clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export type ClassValue = clsx.ClassValue;

export const cn = (...classList: ClassValue[]) =>
  extendTailwindMerge({
    override: {
      classGroups: {
        "font-size": [
          {
            text: ["h1", "h2", "h3", "h4", "h5", "h6"],
          },
        ],
      },
    },
  })(clsx.clsx(...classList));
