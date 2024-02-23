import { MENU_COL } from "@/utils/constant";
import MenuColumnItem from "./MenuColumnItem";

export default function MenuColumn() {
  return (
    <div className="grid grid-cols-4 gap-[32px] mt-[56px]">
      {MENU_COL &&
        MENU_COL.map((menu, idx) => <MenuColumnItem key={idx} {...menu} />)}
    </div>
  );
}
