import cn from "../../lib/cn";
import { debug } from "../../lib/logger";

export default function GameResult({ success, history, day }) {
  const copyResult = () => {
    const gray = "⬜";
    const green = "🟩";
    const blue = "🟦";
    const yellow = "🟨";

    let result = `Solvedle 결과 #${day}\n`;
    result += "https://solvedle.vercel.app/\n\n";

    for (let i = 0; i < 6; i++) {
      if (i >= history.length) {
        for (let j = 0; j < history[0].length; j++) {
          result += gray;
        }
        result += "\n";
        continue;
      }

      for (let j = 0; j < history[i].length; j++) {
        switch (history[i][j]) {
          case "correct":
            result += green;
            break;
          case "wrongLoc":
            result += blue;
            break;
          case "jamoCorrect":
            result += yellow;
            break;
          default:
            result += gray;
            break;
        }
      }

      result += "\n";
    }

    debug(result);
    navigator.clipboard.writeText(result);
    alert("결과가 복사되었습니다.");
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div
          className={cn(
            "bg-white flex flex-col w-[500px] p-4 rounded shadow-lg items-center"
          )}
        >
          {success ? (
            <div className="text-green-600 font-bold text-lg">맞았습니다!!</div>
          ) : (
            <div className="text-red-500 font-bold text-lg">틀렸습니다...</div>
          )}

          <div className="mt-8">결과 공유하기</div>
          <div className="mb-8">아래 버튼을 눌러 결과를 복사하세요</div>

          <div className="flex justify-center">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-700"
              align="center"
              onClick={copyResult}
            >
              결과 복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
