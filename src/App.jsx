import cn from "../utils/cn";
import HowToPlay from "./HowToPlay";

function App() {
  return (
    <div>
      <div align="center">
        <p className="text-lg font-bold px-1 py-1 inline">
          Solved 
        </p>
        <p className="text-lg bg-green-500 text-white px-3 py-0.75 rounded-md font-bold inline-block">
          le
        </p>
      </div>
      <HowToPlay />
      <a href="https://github.com/karpitony/solvedle" target="_blank" rel="noopener noreferrer">
        <img 
          className="h-10" 
          src="src/assets/github-mark.png" 
          alt="GitHub"
        />
      </a>
    </div>
  );
}

export default App;
