import { useEffect } from "react";
import cn from "../../lib/cn";
import { validateTag } from "../../lib/validator";

function Cell({ tagLength, value, answer }) {
  const ans = validateTag(answer, value.join(""), tagLength);

  useEffect(() => {
    console.log(ans);
  }, [ans]);

  const colors = {
    correct: "bg-green-200",
    wrongLoc: "bg-blue-200",
    jamoCorrect: "bg-yellow-200",
    // wrongLocJamo: "bg-blue-200",
    wrong: "bg-gray-200",
  };

  return (
    <div className="flex gap-1">
      {value.map((letter, i) => (
        <div
          key={i}
          className={cn(
            "w-16 h-16 border-2 border-slate-400 rounded font-extrabold",
            "flex items-center justify-center select-none text-3xl",
            colors[ans[i]] || "bg-gray-200"
          )}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Cell;
