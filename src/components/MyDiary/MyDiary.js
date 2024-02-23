import MyDiaryItem from "./MyDiaryItem";

export default function MyDiary() {
  return (
    <div className="mt-[5.6rem]">
      <p className="text-ds-dark-500 text-xl-22 font-inter">MY DIARY</p>
      <div className="grid grid-cols-4 gap-3">
        {Array.from(Array(8).keys()).map((item) => (
          <MyDiaryItem key={item} />
        ))}
      </div>
    </div>
  );
}
