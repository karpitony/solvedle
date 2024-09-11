import cn from "../utils/cn";

function App() {
  const display = true;
  return (
    <div
      className={cn(
        "text-red-600",
        "dark:text-red-300 text-lg md:text-2xl",
        display && "bg-slate-300"
      )}
    >
      Hello World!
    </div>
  );
}

export default App;
