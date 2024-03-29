import Photo from "@/components/Photo/Photo";
import { IconCup, IconKnife, IconMemo } from "@/icons/common";
import BaseButton from "@/ui/BaseButton/BaseButton";
import BaseImage from "@/ui/BaseImage/BaseImage";
import HexIcon from "@/ui/HexIcon/HexIcon";
import { clsx } from "@/utils/common";
import { PHOTOS } from "@/utils/constant";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/Chart/Chart"), { ssr: false });

export default function Home() {
  return (
    <div>
      <div className="flex flex-row lg-max:flex-col">
        <div className={"relative w-[42%] lg-max:w-[100%]"}>
          <BaseImage
            className={"aspect-[540/316] lg-max:w-[100%]"}
            src={"/img/d01.jpg"}
            width={540}
            height={316}
            style={{ objectFit: "cover" }}
          />
          <div
            className={
              "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row justify-center items-end text-white"
            }
          >
            <span className="text-lg font-inter font-normal">05/21</span>
            <span className="text-2xl-25 leading-[3rem] font-inter font-normal">
              75%
            </span>
          </div>
        </div>
        <div className="flex-1">
          <Chart />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-[8.4rem] my-[2.5rem] justify-center">
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
      <div
        className={clsx(
          "grid auto-rows-fr grid-cols-4 gap-2 mx-[16rem]",
          "lg-max:mx-[1.6rem]",
          "lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs-max:grid-cols-1"
        )}
      >
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
