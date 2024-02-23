import BaseImage from "@/ui/BaseImage/BaseImage";

export default function RecordItem({ title, description, img }) {
  return (
    <div className="aspect-square w-[28.8rem] border-[2.4rem] border-ds-primary-300 relative">
      <div className="w-full h-full relative">
        <BaseImage
          className="w-full h-full grayscale"
          style={{ objectFit: "cover" }}
          width={10}
          height={10}
          src={img}
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-30"></div>
      </div>

      <div className="absolute w-full top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] flex flex-col gap-3 justify-center items-center">
        {title && (
          <span className="text-ds-primary-300 text-2xl-25 font-inter">
            {title}
          </span>
        )}

        {description && (
          <span className="bg-ds-primary-400 text-white text-sm-15 font-inter px-3 py-1">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
