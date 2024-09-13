import Cell from "./Cell";

export default function ({ tagLength }) {
  return (
    <>
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="my-2 flex">
          <Cell tagLength={tagLength} />
        </div>
      ))}
    </>
  );
}
