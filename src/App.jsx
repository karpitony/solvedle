import cn from "../utils/cn";
import React, { useMemo } from "react";
import HowToPlay from "./HowToPlay";
import * as tags from './assets/tags.json'

function App() {
  const solvedacTags = tags["tags"].filter((element) => element.length >= 2 && element.length <= 8);
  
  // Function to generate a daily seed-based random number
  function LCG(seed) {
    return function() {
      seed = (seed * 1879 + 1013904223) % 65536;
      return seed / 65536;
    };
  };

  function fisherYatesShuffle(array, randomFunc) {
    let i, j, temp;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(randomFunc() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  // Generate shuffled tags only once per render
  const shuffledTags = useMemo(() => {
    // Use the current day as the seed
    const epochMs = new Date('January 1, 2022 00:00:00').valueOf();
    const now = Date.now();
    const msInDay = 86400000;
    const daysSinceEpoch = Math.floor((now - epochMs) / msInDay);
    const seed = daysSinceEpoch;
    const random = LCG(seed);

    return fisherYatesShuffle([...solvedacTags], random);
  }, [solvedacTags]);
  const todayTags = solvedacTags[0];



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
