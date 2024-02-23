import MyDiary from "@/components/MyDiary/MyDiary";
import MyExercise from "@/components/MyExercise/MyExercise";
import Record from "@/components/Record/Record";
import BaseButton from "@/ui/BaseButton/BaseButton";

export default function MyRecord() {
  return (
    <div className="px-[160px]">
      <Record />
      <div className="h-[30.4rem]"></div>
      <MyExercise />
      <MyDiary />

      <div className="mt-[2.6rem] mb-[6.4rem] text-center">
        <BaseButton>自分の日記をもっと見る</BaseButton>
      </div>
    </div>
  );
}
