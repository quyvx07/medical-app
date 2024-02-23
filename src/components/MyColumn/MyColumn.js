import MyColumnItem from "./MyColumnItem";

export default function MyColumnComponent() {
  return (
    <div className="grid grid-cols-4 gap-[8px] mt-[56px]">
      {Array.from(Array(8).keys()).map((item) => (
        <MyColumnItem key={item} />
      ))}
    </div>
  );
}
