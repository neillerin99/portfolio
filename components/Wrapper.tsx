import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4", className)}>
      {children}
    </div>
  );
}
