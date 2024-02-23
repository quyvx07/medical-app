import { IconUp } from "@/icons/common";
import { twMerge } from "tailwind-merge";

export default function IconScroll({ children, className }) {
  return (
    <div
      className={twMerge(
        "w-[4.8rem] h-[4.8rem] flex justify-center items-center rounded-full border border-ds-gray text-ds-gray cursor-pointer",
        className
      )}
    >
      <IconUp className={twMerge("text-ds-gray", className)} />
    </div>
  );
}
