import { useState, useRef } from "react";

function HowToPlay() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        How to Play
      </button>

      {modalOpen && (
        <div
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div>
            <p>솔브들은 태그 맞추기 워들 게임입니다!</p>
            <p>기본 규칙</p>
            <button onClick={() => setModalOpen(false)}>설명창 닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowToPlay;
