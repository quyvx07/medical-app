export default function HexIcon({ children, title }) {
  return (
    <div className="bg-hexagon h-[13.4rem] w-[11.6rem] flex flex-col justify-center items-center">
      {children}
      {title && <span className="text-xl text-white">{title}</span>}
    </div>
  );
}
