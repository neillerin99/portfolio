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
        "flex items-center justify-center gap-2 border border-gray-500 sm:w-fit w-full  py-2 px-3 rounded-md shadow-md shadow-accent-blue hover:border-white hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
