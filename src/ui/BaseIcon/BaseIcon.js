
export default function BaseIcon({ children, infoCount }) {
  return (
    <div className="relative inline-block">
      {infoCount && (
        <div className="absolute top-0 -right-2 w-4 h-4 bg-ds-primary-400 flex justify-center items-center rounded-full">
          <span className="text-white text-xs-10">{infoCount}</span>
        </div>
      )}
      {children}
    </div>
  );
}
