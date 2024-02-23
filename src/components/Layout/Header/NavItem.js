import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
import BaseIcon from "@/ui/BaseIcon/BaseIcon";

export default function NavItem({
  label,
  icon,
  path = "/",
  active,
  className,
  icon_info,
}) {
  return (
    <li className={className}>
      <NextLink
        className={twMerge(
          "flex flex-row gap-[0.6rem] w-[16rem] px-2 items-center",
          {
            "!text-ds-primary-400": active,
          }
        )}
        href={path}
      >
        {icon && icon_info ? (
          <BaseIcon infoCount={icon_info}> {icon?.()}</BaseIcon>
        ) : (
          icon?.()
        )}
        {label && <span className={"text-white text-base"}>{label}</span>}
      </NextLink>
    </li>
  );
}
