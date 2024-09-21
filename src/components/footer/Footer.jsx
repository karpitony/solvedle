import { FaGithub } from "react-icons/fa6";
import cn from "../../lib/cn";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="w-full max-w-[1024px] flex-col py-8 px-8">
        <div
          className={cn(
            "flex justify-between max-w-[1024px] w-full items-center",
            "border-t-2 border-gray-400 py-8"
          )}
        >
          <span>&copy; 2024 karpitony, YEAHx4.</span>
          <div className="text-3xl">
            <a href="https://github.com/karpitony/solvedle" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          This page is neither endorsed by nor associated with Solved.ac.
        </div>
      </div>
    </footer>
  );
}
