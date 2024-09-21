export default function HowToPlayContent() {
  return (
    <>
      <p className="mt-4 mb-2">
        <b>기본 규칙</b>
      </p>
      <ul className="list-disc ml-4">
        <li>올바른 태그를 맞춰야 합니다.</li>
        <li>띄어쓰기는 제외됩니다.</li>
        <li>태그 이름은 한국어 BOJ 표기를 기준으로 합니다.</li>
        <li>각 칸마다 한 글자입니다.</li>
        <li>숫자, 영어, 특수문자가 들어간 태그는 제외됩니다.</li>
      </ul>
      <p className="mt-8 mb-2">
        <b>배경색</b>
      </p>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2 items-center">
          <span className="bg-green-200 w-4 h-4 rounded-sm"></span> 위치와
          글자가 일치합니다.
        </li>
        <li className="flex gap-2 items-center flex-wrap">
          <span className="bg-blue-200 w-4 h-4 rounded-sm"></span> 위치는
          틀렸지만 글자는 맞습니다.
        </li>
        <li className="flex gap-2 items-center">
          <span className="bg-yellow-200 w-4 h-4 rounded-sm"></span>
          <span>자음 또는 모음이 일치합니다.</span>
        </li>
        <li className="flex gap-2 items-center">
          <span className="bg-gray-200 w-4 h-4 rounded-sm"></span>
          틀렸습니다!
        </li>
      </ul>
    </>
  );
}
