import cn from "../../lib/cn";

export default function HowToPlayBox() {
  return (
    <div
      className={cn(
        "border-2 border-gray-400 rounded-md flex flex-col",
        "w-[320px] p-8 h-[640px]"
      )}
    >
      <div className="text-center font-bold text-lg">플레이 방법</div>
    </div>
  );
}
