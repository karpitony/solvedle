import cn from "../../lib/cn";
import { validateTag } from "../../lib/validator";

function Cell({ tagLength, value, answer }) {
  const ans = validateTag(answer, value.join(""), tagLength);

  return (
    <div className="flex gap-1">
      {value.map((letter, index) => (
        <div
          key={index}
          className={cn(
            "w-24 h-24 border-2 border-slate-400 rounded font-extrabold",
            "flex items-center justify-center select-none text-3xl"
          )}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Cell;
