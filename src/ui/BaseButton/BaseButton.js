import { twMerge } from "tailwind-merge";

const constantStyleStatus = {
  dark: "text-white bg-ds-gray",
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
      className={twMerge(
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
