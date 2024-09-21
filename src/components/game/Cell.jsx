import cn from "../../lib/cn";
import { useState, useEffect } from "react";

function Cell({ tagLength, value }) {
  const [cellSize, setCellSize] = useState("w-14 h-14");
  
  useEffect(() => {
    if (tagLength === 7) {
      setCellSize("w-12 h-12");
    } else if (tagLength >= 8) {
      setCellSize("w-10 h-10");
    }
  }, [tagLength]);

  // userResult에 따라 동적으로 클래스 이름 결정
  let baseClasses = cn(
    `${cellSize} md:w-20 md:h-20`,
    "border border-slate-500 rounded w-20 h-20 text-center",
    "flex justify-center items-center select-none text-3xl",
    "font-extrabold"
  );

  return (
    <div className="flex gap-1">
      {value.map((letter, index) => (
        <div
          key={index}
          type="text"
          maxLength="1"
          className={cn(
            baseClasses
          )}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Cell;
