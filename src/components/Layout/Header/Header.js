"use client";

import { IconMenu } from "@/icons/common";
import { Logo } from "@/icons/logo";
import NavItem from "./NavItem";
import NextLink from "next/link";
import { MENU_NAVIGATION, NAVIGATION } from "@/utils/constant";
import Dropdown from "@/ui/Dropdown/Dropdown";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-ds-dark-500 text-white px-[16rem] py-4 flex flex-row justify-between">
      <NextLink href="/">
        <Logo className="text-ds-primary-400 ml-4" />
      </NextLink>
      <div className="flex flex-row">
        <ul className="flex flex-row list-none text-ds-primary-400">
          {NAVIGATION &&
            NAVIGATION.map((value, idx) => (
              <NavItem
                key={idx}
                {...value}
                active={pathname.endsWith(`${value.path}`)}
              />
            ))}
        </ul>
        <Dropdown>
          <ul className="absolute bottom-0 bg-ds-gray translate-y-[100%] right-0 w-[280px] z-20">
            {MENU_NAVIGATION &&
              MENU_NAVIGATION.map((value, idx) => (
                <MenuItem key={idx} {...value} />
              ))}
          </ul>
        </Dropdown>
      </div>
    </header>
  );
}
