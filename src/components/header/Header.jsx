import cn from "../../lib/cn";

export default function Header() {
  return (
    <header
      className={cn(
        "flex justify-center w-full mt-8 mb-4 items-center text-2xl",
        "font-bold gap-2"
      )}
    >
      <span>Solved</span>
      <span className="bg-green-500 text-white rounded-md px-2">le</span>
    </header>
  );
}
