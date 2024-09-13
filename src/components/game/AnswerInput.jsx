import cn from "../../lib/cn";

export default function AnswerInput({ value, onKeyDown, onChange }) {
  return (
    <div className="mt-8 flex justify-center">
      <input
        type="text"
        placeholder="추측한 태그를 입력해주세요."
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={cn(
          "flex justify-center border border-slate-500 px-3 py-1 rounded-sm",
          "focus:outline-none"
        )}
      />
    </div>
  );
}
