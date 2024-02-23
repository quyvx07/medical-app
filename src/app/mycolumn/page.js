import MenuColumn from "@/components/MenuColumn/MenuColumn";
import MyColumnComponent from "@/components/MyColumn/MyColumn";
import BaseButton from "@/ui/BaseButton/BaseButton";

export default function MyColumn() {
  return (
    <div className="px-[160px]">
      <MenuColumn />
      <MyColumnComponent />

      <div className="mt-[2.6rem] mb-[6.4rem] text-center">
        <BaseButton>コラムをもっと見る</BaseButton>
      </div>
    </div>
  );
}
