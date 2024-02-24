import { clsx } from "@/utils/common";

const constantStyleStatus = {
  primary: "!text-white bg-ds-primary-300 text-sm-15 leading-[2.2rem]",
  dark: "text-white bg-ds-gray",
  white: "!text-ds-primary-300 bg-white text-sm-15 leading-[2.2rem]",
};

export default function BaseButton({
  children,
  isPressed,
  className,
  disabled,
  loading,
  status = "default",
  ...rest
}) {
  const buttonStatusStyle = constantStyleStatus?.[status];
  return (
    <button
      role="button"
      aria-pressed={isPressed ? "true" : "false"}
      disabled={!isPressed}
      className={clsx(
        "min-w-[29.6rem] min-h-[5.6rem] text-lg bg-btn font-light cursor-pointer rounded-md text-white",
        buttonStatusStyle,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
