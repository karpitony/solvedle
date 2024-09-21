import cn from "../../lib/cn";
import HowToPlayContent from "./HowToPlayContent";

export default function HowToPlayBox() {
  return (
    <div
      className={cn(
        "border-2 border-gray-400 rounded-md flex flex-col",
        "w-[320px] p-8 h-[640px]"
      )}
    >
      <div className="text-center font-bold text-lg mb-4">플레이 방법</div>
      <HowToPlayContent />
    </div>
  );
}
