import cn from "../../lib/cn";
import HowToPlayContent from "./HowToPlayContent";

export default function HowToPlayBox() {
  return (
    <div
      className={cn(
        "border-2 border-gray-400 rounded-md flex flex-col",
        "w-[340px] p-8 h-[640px] hidden md:block"
      )}
    >
      <HowToPlayContent />
    </div>
  );
}
