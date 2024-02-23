import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
import BaseIcon from "@/ui/BaseIcon/BaseIcon";

export default function MenuItem({ label, path = "/", active, className }) {
  return (
    <li className={twMerge("px-[32px] py-[22px] border-b border-ds-dark-600", className)}>
      <NextLink
        className={twMerge({
          "!text-ds-primary-400": active,
        })}
        href={path}
      >
        {label && <span className={"text-white text-base"}>{label}</span>}
      </NextLink>
    </li>
  );
}
