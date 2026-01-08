import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/" className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground rounded-lg p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 16v.01" />
          <path d="M12 12v.01" />
          <path d="M12 16v.01" />
          <path d="M16 12v.01" />
          <path d="M8.5 12v.01" />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight">iCrowd</span>
    </a>
  );
};
