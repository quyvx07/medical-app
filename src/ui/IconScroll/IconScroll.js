import { IconUp } from "@/icons/common";
import { clsx } from "@/utils/common";

export default function IconScroll({ children, className }) {
  return (
    <div
      className={clsx(
        "w-[4.8rem] h-[4.8rem] flex justify-center items-center rounded-full border border-ds-gray text-ds-gray cursor-pointer",
        className
      )}
    >
      <IconUp className={clsx("text-ds-gray", className)} />
    </div>
  );
}
