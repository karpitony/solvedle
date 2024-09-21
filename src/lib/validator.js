import { jamo } from "./jamo";

/**
 *
 * @param {string} answer
 * @param {string} tag
 * @param {number} length
 * @returns {Array<"correct" | "wrongLoc" | "jamoCorrect" | "wrongLocJamo"> | "empty"}
 */
export const validateTag = (answer, tag, length) => {
  if (!tag) return "empty";

  const result = [];
  const ansJamo = jamo(answer);
  const tagJamo = jamo(tag);

  for (let i = 0; i < length; i++) {
    if (answer[i] === tag[i]) {
      result.push("correct");
      continue;
    }

    if (answer.includes(tag[i])) {
      result.push("wrongLoc");
      continue;
    }

    let found = false;
    for (let j of tagJamo[i]) {
      if (ansJamo[i].includes(j)) {
        result.push("jamoCorrect");
        found = true;
        break;
      }
    }

    if (found) continue;

    for (let j of tagJamo[i]) {
      for (let k = 0; k < length; k++) {
        if (k === i) continue;

        if (ansJamo[k].includes(j)) {
          result.push("wrongLocJamo");
          found = true;
          break;
        }
      }

      if (found) break;
    }

    if (!found) result.push("wrong");
  }

  return result;
};
