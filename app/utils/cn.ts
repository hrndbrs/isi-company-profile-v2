import * as clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ClassValue = clsx.ClassValue;

export const cn = (...classList: ClassValue[]) =>
  twMerge(clsx.clsx(...classList));
