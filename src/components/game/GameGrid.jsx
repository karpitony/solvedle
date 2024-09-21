import Cell from "./Cell";

export default function ({ tagLength, history, answer }) {
  const data = Array.from({ length: 6 }, () => Array(tagLength).fill(""));
  for (let i = 0; i < history.length; i++) {
    data[i] = history[i].split("");
  }

  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="my-2 flex">
          <Cell tagLength={tagLength} value={data[i]} answer={answer} />
        </div>
      ))}
    </>
  );
}
