import BaseImage from "@/ui/BaseImage/BaseImage";

export default function Record({ title, description, img }) {
  return (
    <div className="aspect-square w-[28.8rem] border-[2.4rem] border-ds-primary-300 relative">
      <BaseImage
        className="w-full h-full grayscale"
        style={{ objectFit: "cover" }}
      />

      <div className="absolute top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] flex flex-col gap-3 text-center">
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
