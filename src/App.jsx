import React, { useMemo, useState } from "react";
import HowToPlay from "./components/how-to-play/HowToPlay";
import Cell from "./components/Cell";
import * as tags from "./assets/tags.json";
import Header from "./components/header/Header";

// Function to generate a daily seed-based random number
function LCG(seed) {
  return function () {
    seed = (seed * 1879 + 1013904223) % 65536;
    return seed / 65536;
  };
}

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

function App() {
  const [userInput, setUserInput] = useState("");

  const solvedacTags = tags["tags"].filter(
    (element) => element.length >= 2 && element.length <= 8
  );

  const epochMs = new Date("September 12, 2024 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const daysSinceEpoch = Math.floor((now - epochMs) / msInDay); // Calculate days since epoch

  // Generate shuffled tags once per day
  const shuffledTags = useMemo(() => {
    const seed = daysSinceEpoch; // Use daysSinceEpoch as the seed
    const random = LCG(seed);

    return fisherYatesShuffle([...solvedacTags], random);
  }, [daysSinceEpoch]);

  const todayTag = shuffledTags[0];
  const tagLength = todayTag.length;
  let letters = "";

  console.log(todayTag);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      letters = userInput;
      setUserInput("");
      if (letters.length !== tagLength) {
        alert("길이가 맞지 않습니다.");
        return;
      }
      if (!solvedacTags.includes(letters)) {
        alert("태그 목록에 없습니다. 다시한번 확인해주세요.");
        return;
      }
      console.log("길이 정상, 태그 목록에 있음");
      // Cell에 데이터 넣고 맞는지 여부 알려주기
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value); // Update userInput with the current input value
  };

  return (
    <div>
      <Header />
      <div align="center">
        {[...Array(6)].map((_, attempt) => (
          <div key={attempt} className="my-2">
            <Cell tagLength={tagLength} />
          </div>
        ))}
      </div>

      <div align="center">
        <input
          type="text"
          placeholder="추측한 태그를 입력해주세요."
          value={userInput}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="flex justify-center border border-slate-500 px-3 py-1"
        />
      </div>

      <HowToPlay />

      <a
        href="https://github.com/karpitony/solvedle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="h-10" src="src/assets/github-mark.png" alt="GitHub" />
      </a>
    </div>
  );
}

export default App;
