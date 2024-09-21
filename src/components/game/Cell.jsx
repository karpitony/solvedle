import React, { useState } from "react";
import cn from "../../lib/cn";
import { validateTag } from "../../lib/validator";

function Cell({ tagLength, value, answer }) {
  const ans = validateTag(answer, value.join(""), tagLength);

  return (
    <div className="flex gap-1">
      {value.map((letter, index) => (
        <div
          key={index}
          type="text"
          maxLength="1"
          className={cn(
            "border border-slate-500 rounded w-20 h-20 text-center",
            "flex justify-center items-center select-none text-3xl",
            "font-extrabold"
          )}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Cell;
