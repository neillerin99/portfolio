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
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
