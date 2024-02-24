import BaseImage from "@/ui/BaseImage/BaseImage";

export default function Photo({ title, ...props }) {
  return (
    <div className="relative">
      <BaseImage
        className="aspect-square w-[100%]"
        style={{ objectFit: "cover" }}
        {...props}
      />
      {title && (
        <span className="absolute bottom-0 bg-ds-primary-300 text-white py-[0.7rem] pl-2 pr-[1rem] text-sm-15 font-inter">
          {title}
        </span>
      )}
    </div>
  );
}
