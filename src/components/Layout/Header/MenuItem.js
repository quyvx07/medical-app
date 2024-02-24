import { clsx } from "@/utils/common";
import NextLink from "next/link";

export default function MenuItem({ label, path = "/", active, className }) {
  return (
    <li className={clsx("px-[32px] py-[22px] border-b border-ds-dark-600", className)}>
      <NextLink
        className={clsx({
          "!text-ds-primary-400": active,
        })}
        href={path}
      >
        {label && <span className={"text-white text-base"}>{label}</span>}
      </NextLink>
    </li>
  );
}
