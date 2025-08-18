import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

interface LinkChipProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export default function LinkChip({
  children,
  className,
  ...props
}: LinkChipProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 border-2 border-solid border-accent-blue w-fit py-2.5 px-4 rounded-md shadow-md shadow-accent-blue",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
