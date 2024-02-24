import MyExerciseItem from "./MyExerciseItem";

export default function MyExercise() {
  return (
    <div className="bg-ds-dark-500 text-white py-4 px-[2.4rem] mt-[5.6rem]">
      <div className="flex flex-row">
        <p className="w-[8.6rem] text-sm-15">MY EXERCISE</p>
        <span className="text-xl-22 ml-[1.2rem]">2021.05.21</span>
      </div>
      <div className="flex flex-row h-[192px] overflow-y-scroll">
        <section className="mt-2 grid grid-cols-2 gap-x-[4rem] gap-y-2 w-full">
          {Array.from(Array(40).keys()).map((item) => (
            <MyExerciseItem key={item} />
          ))}
        </section>
      </div>
    </div>
  );
}
