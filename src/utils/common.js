import { twMerge } from "tailwind-merge";
import classNames from "clsx";

export function clsx(...inputs) {
  return twMerge(classNames(inputs));
}
