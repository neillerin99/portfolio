"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function EnterAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
