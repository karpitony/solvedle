import { useState, useMemo } from "react";
import * as tags from "../../assets/tags.json";
import Cell from "../Cell";
import { fisherYatesShuffle, LCG } from "../../lib/random";

export default function Game() {
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
    <>
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
    </>
  );
}
