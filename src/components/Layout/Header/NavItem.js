import NextLink from "next/link";
import BaseIcon from "@/ui/BaseIcon/BaseIcon";
import clsx from "clsx";

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
        className={"flex flex-row gap-[0.6rem] w-[16rem] px-2 items-center"}
        href={path}
      >
        {icon && icon_info ? (
          <BaseIcon infoCount={icon_info}> {icon?.()}</BaseIcon>
        ) : (
          icon?.()
        )}
        {label && (
          <span
            className={clsx(
              "text-white text-base",
              {"!text-ds-primary-400" : active}
            )}
          >
            {label}
          </span>
        )}
      </NextLink>
    </li>
  );
}
