import { FaGithub } from "react-icons/fa6";
import cn from "../../lib/cn";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div
        className={cn(
          "flex justify-between max-w-[1024px] w-full items-center",
          "border-t-2 border-gray-400 py-8 px-8"
        )}
      >
        <span>&copy; 2024 karpitony, YEAHx4.</span>
        <div className="text-3xl">
          <a href="https://github.com/karpitony/solvedle" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
