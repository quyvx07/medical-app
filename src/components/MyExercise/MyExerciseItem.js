export default function MyExerciseItem() {
  return (
    <div className="flex flex-row justify-between border-b border-ds-gray">
      <div className="flex flex-row">
        <span className="text-xs-5 mt-[4px]">●</span>
        <div className="text-sm-15 ml-[12px]">
          <p className="text-white">家事全般（立位・軽い）</p>
          <p className="text-ds-primary-300">26kcal</p>
        </div>
      </div>
      <span className="text-ds-primary-300 text-lg mr-[14px]">10 min</span>
    </div>
  );
}
