import Chart from "@/components/Chart/Chart";
import MyDiary from "@/components/MyDiary/MyDiary";
import MyExercise from "@/components/MyExercise/MyExercise";
import Record from "@/components/Record/Record";
import BaseButton from "@/ui/BaseButton/BaseButton";

export default function MyRecord() {
  return (
    <div className="px-[160px]">
      <Record />
      <div className="bg-ds-dark-500 text-white py-4 px-[2.4rem] mt-[5.6rem]">
        <div className="flex flex-row">
          <p className="w-[8.6rem] text-sm-15">BODY RECORD</p>
          <span className="text-xl-22 ml-[1.2rem]">2021.05.21</span>
        </div>
        <Chart className={"bg-ds-dark-500 pl-[50px]"} />
        <div className="flex flex-row gap-4 ml-[46px]">
          <BaseButton
            status="white"
            className={"min-w-[56px] min-h-[24px] rounded-2xl"}
          >
            日
          </BaseButton>
          <BaseButton
            status="white"
            className={"min-w-[56px] min-h-[24px] rounded-2xl"}
          >
            週
          </BaseButton>
          <BaseButton
            status="white"
            className={"min-w-[56px] min-h-[24px] rounded-2xl"}
          >
            月
          </BaseButton>
          <BaseButton
            status="primary"
            className={"min-w-[56px] min-h-[24px] rounded-2xl"}
          >
            年
          </BaseButton>
        </div>
      </div>
      <MyExercise />
      <MyDiary />

      <div className="mt-[2.6rem] mb-[6.4rem] text-center">
        <BaseButton>自分の日記をもっと見る</BaseButton>
      </div>
    </div>
  );
}
