import Cell from "./Cell";

export default function GameGrid({ attempts, tagLength, userResult }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="flex">
          {[...Array(tagLength)].map((_, index) => (
            <Cell
              key={index}
              inputLetter={attempts[attempt]?.[index] || ""}
              userResult={userResult[attempt]?.[index] || { matched: 0 }} // userResult 값 전달
              tagLength={tagLength}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
