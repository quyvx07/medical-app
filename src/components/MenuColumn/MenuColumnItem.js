export default function MenuColumnItem({ title, des }) {
  return (
    <div className="py-[24px] px-2 bg-ds-dark-600 flex flex-col items-center gap-2 text-center">
      {title && <span className="text-xl-22 text-ds-primary-300">{title}</span>}

      <div className="w-[5.6rem] h-[1px] bg-white"></div>
      {des && (
        <span className="text-white text-lg leading-[2.6rem]">{des}</span>
      )}
    </div>
  );
}
