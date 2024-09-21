import { useState, useMemo } from "react";
import * as tags from "../../assets/tags.json";
import { fisherYatesShuffle, LCG } from "../../lib/random";
import GameGrid from "./GameGrid";
import AnswerInput from "./AnswerInput";
import HowToPlay from "../how-to-play/HowToPlay";
import GameResult from "./GameResult";
import { validateTag } from "../../lib/validator";
import { debug } from "../../lib/logger";

export default function Game() {
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();

      const letters = userInput;
      setUserInput("");

      if (letters.length !== tagLength) {
        alert("길이가 맞지 않습니다.");
        return;
      }

      if (!solvedacTags.includes(letters)) {
        alert("태그 목록에 없습니다. 다시 한번 확인해주세요.");
        return;
      }

      debug("길이 정상, 태그 목록에 있음");

      debug("userInput:", letters);
      debug("todayTag:", todayTag);

      if (history.length === 5) {
        setIsDone(true);
      }

      if (
        validateTag(todayTag, letters, tagLength).every((v) => v === "correct")
      ) {
        setSuccess(true);
        setIsDone(true);
      }

      setHistory([...history, letters]);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value); // Update userInput with the current input value
  };

  return (
    <>
      <GameGrid tagLength={tagLength} history={history} answer={todayTag} />
      <AnswerInput
        value={userInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      {isDone && (
        <GameResult
          success={success}
          history={history.map((v) => validateTag(v, todayTag, tagLength))}
          day={daysSinceEpoch}
        />
      )}
      <HowToPlay />
    </>
  );
}
