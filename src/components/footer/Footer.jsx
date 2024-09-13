import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex justify-between max-w-[1024px] w-full">
        <span>&copy; 2024 karpitony, YEAHx4.</span>
        <FaGithub />
      </div>
    </footer>
  );
}
