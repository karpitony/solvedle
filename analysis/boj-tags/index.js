const { writeFileSync } = require("fs");

const BASE_URL =
  "https://gist.githubusercontent.com/karpitony/7ac87dff22a01599fd6c9c35782b555b/raw/fcde6ed51c88d0c5623f80db282beb1f6fbe4175/tags.json";

const fetchTags = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data.items
    .map((i) => i.displayNames)
    .map((i) => i.filter((j) => j.language === "ko"))
    .map((i) => i.map((j) => j.name)[0]);
};

fetchTags().then((data) => {
  writeFileSync("tags.txt", data.join("\n"));
});
