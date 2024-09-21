export default function GameResult({ success }) {
  return (
    <div className="flex justify-center mt-16">
      <div
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        onClick={(e) => {}}
      >
        <div className="bg-white flex flex-col w-[500px] p-4 rounded shadow-lg">
          <div>Game done!</div>

          <div className="flex justify-center">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-700"
              align="center"
            >
              결과 복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
