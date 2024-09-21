import cn from "../../lib/cn";
import { useState, useEffect } from "react";
import { validateTag } from "../../lib/validator";

function Cell({ tagLength, value, answer }) {
  const [cellSize, setCellSize] = useState("w-14 h-14");
  
  useEffect(() => {
    if (tagLength === 7) {
      setCellSize("w-12 h-12");
    } else if (tagLength >= 8) {
      setCellSize("w-10 h-10");
    }
  }, [tagLength]);

  const ans = validateTag(answer, value.join(""), tagLength);
  
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
            `${cellSize} md:w-16 md:h-16`,
            "border-2 border-slate-400 rounded font-extrabold",
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
