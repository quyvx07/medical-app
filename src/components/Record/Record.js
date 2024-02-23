import { RECORDS } from "@/utils/constant";
import RecordItem from "./RecordItem";

export default function Record() {
  return (
    <div className="flex flex-row gap-[4.8rem] my-[5.6rem] mt-[4.6rem]">
      {RECORDS &&
        RECORDS.map((record, idx) => (
          <RecordItem
            key={idx}
            title={record.title}
            description={record.des}
            img={record.src}
          />
        ))}
    </div>
  );
}
