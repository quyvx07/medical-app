import Photo from "@/components/Photo/Photo";
import { IconCup, IconKnife, IconMemo } from "@/icons/common";
import BaseButton from "@/ui/BaseButton/BaseButton";
import BaseImage from "@/ui/BaseImage/BaseImage";
import HexIcon from "@/ui/HexIcon/HexIcon";
import { PHOTOS } from "@/utils/constant";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/Chart/Chart"), { ssr: false });

export default function Home() {
  return (
    <div>
      <div className="flex flex-row">
        <BaseImage
          className={"aspect-[540/316] w-[42%]"}
          src={"/img/d01.jpg"}
          width={540}
          height={316}
          style={{ objectFit: "cover" }}
        />
        <div className="flex-1">
          <Chart />
        </div>
      </div>
      <div className="flex flex-row gap-[8.4rem] my-[2.5rem] justify-center">
        <HexIcon title="Morning">
          <IconKnife className="text-white" />
        </HexIcon>
        <HexIcon title="Lunch">
          <IconKnife className="text-white" />
        </HexIcon>
        <HexIcon title="Dinner">
          <IconKnife className="text-white" />
        </HexIcon>
        <HexIcon title="Snack">
          <IconCup className="text-white" />
        </HexIcon>
      </div>
      <div className="grid grid-rows-2 grid-cols-4 gap-2 mx-[16rem]">
        {PHOTOS &&
          PHOTOS.map(({ title, src }, idx) => (
            <Photo key={idx} title={title} src={src} width={10} height={10} />
          ))}
      </div>
      <div className="mt-[2.8rem] mb-[6.4rem] text-center">
        <BaseButton>記録をもっと見る</BaseButton>
      </div>
    </div>
  );
}
