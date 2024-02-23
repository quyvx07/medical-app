import { IconMemo } from "@/icons/common";
import BaseButton from "@/ui/BaseButton/BaseButton";
import HexIcon from "@/ui/HexIcon/HexIcon";
import IconScroll from "@/ui/IconScroll/IconScroll";

export default function Home() {
  return (
    <div>
      <HexIcon title="Mômmo">
        <IconMemo className="text-white" />
      </HexIcon>
      <BaseButton>ss324234432</BaseButton>
      <IconScroll />
    </div>
  );
}
