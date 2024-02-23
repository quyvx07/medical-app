"use client";

import { IconMenu } from "@/icons/common";
import { Logo } from "@/icons/logo";
import NavItem from "./NavItem";
import NextLink from "next/link";
import { NAVIGATION } from "@/utils/constant";

export default function Header() {
  return (
    <div className="bg-ds-dark-500 text-white px-[16rem] py-4 flex flex-row justify-between">
      <Logo className="text-ds-primary-400 ml-4" />
      <div className="flex flex-row">
        <ul className="flex flex-row list-none text-ds-primary-400">
          {NAVIGATION &&
            NAVIGATION.map((value, idx) => <NavItem key={idx} {...value} />)}
        </ul>
        <NextLink className="ml-4" href={"/"}>
          <IconMenu className="text-white" />
        </NextLink>
      </div>
    </div>
  );
}
