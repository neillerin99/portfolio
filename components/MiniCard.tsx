import { cn } from "@/lib/utils";

interface MiniCardProps {
  children: React.ReactNode;
  className?: string;
}
export default function MiniCard({ children, className }: MiniCardProps) {
  return (
    <div
      className={cn(
        "cursor-default transition w-24 h-24 bg-dark-blue flex flex-col rounded-md items-center justify-center gap-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-accent-blue shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
