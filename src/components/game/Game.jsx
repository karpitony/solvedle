import { useState, useMemo } from "react";
import * as tags from "../../assets/tags.json";
import { fisherYatesShuffle, LCG } from "../../lib/random";
import { jamo } from "../../lib/jamo";
import { debug } from "../../lib/logger";
import GameGrid from "./GameGrid";
import AnswerInput from "./AnswerInput";

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
  const tagJamo = jamo(todayTag);
  debug(tagJamo); // Debugging
  let letters = "";

  debug(todayTag);

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      letters = userInput;
      console.log(letters); // Debugging
      setUserInput("");
      
      if (letters.length !== tagLength) {
        alert("길이가 맞지 않습니다.");
        return;
      }
      if (!solvedacTags.includes(letters)) {
        alert("태그 목록에 없습니다. 다시한번 확인해주세요.");
        return;
      }
      debug("길이 정상, 태그 목록에 있음");
      // jamo 리턴으로 2차원 배열와서 바꿔야함
      // const jamoLetters = jamo(letters);
      // console.log(jamoLetters);
      // Cell에 데이터 넣고 맞는지 여부 알려주기
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value); // Update userInput with the current input value
  };

  return (
    <>
      <GameGrid tagLength={tagLength} />
      <AnswerInput
        value={userInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </>
  );
}
