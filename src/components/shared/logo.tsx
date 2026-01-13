import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/" className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground rounded-lg p-1">
        <img src="/logo.svg" alt="iCrowd logo" className="h-8 w-8" />
      </div>
      <span className="font-bold text-xl tracking-tight">iCrowd</span>
    </a>
  );
};
