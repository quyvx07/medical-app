import BaseImage from "@/ui/BaseImage/BaseImage";

export default function MyColumnItem() {
  return (
    <div className="">
      <div className="relative">
        <BaseImage
          className="w-full h-full"
          src={"/img/column-1.jpg"}
          width={234}
          height={144}
        />
        <span className="text-white text-sm-15 leading-[3rem] bg-ds-primary-300 px-2 absolute bottom-0 font-inter">
          2021.05.17 23:25
        </span>
      </div>
      <p className="text-sm-15 break-words line-clamp-2 mt-2">
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
      </p>
      <p className="text-xs text-ds-primary-400 break-words line-clamp-1 mt-2">
        #魚料理 #和食 #DHA
      </p>
    </div>
  );
}
