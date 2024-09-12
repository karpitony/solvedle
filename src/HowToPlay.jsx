import { useState, useRef } from "react";

function HowToPlay() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <div className="flex justify-center mt-5">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setModalOpen(true)}
      >
        How to Play
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="bg-white w-64 h-40 p-4 rounded shadow-lg">
            <p className="font-bold text-lg">솔브들은 태그 맞추기 워들 게임입니다!</p>
            <p className="mt-2">기본 규칙</p>
            <div className="flex justify-center">
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                align="center"
                onClick={() => setModalOpen(false)}
              >
                설명창 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowToPlay;
