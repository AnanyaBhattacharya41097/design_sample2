import { motion } from "motion/react";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export function NeonButton({ children, onClick, variant = "primary", className = "" }: NeonButtonProps) {
  const variants = {
    primary: "bg-[#1741DC] hover:bg-[#1E4FFF] shadow-[0_0_20px_rgba(23,65,220,0.5)] hover:shadow-[0_0_30px_rgba(23,65,220,0.8)]",
    secondary: "bg-[#8B5CF6] hover:bg-[#A78BFA] shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]",
    danger: "bg-[#EF4444] hover:bg-[#F87171] shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 py-4 rounded-xl text-white transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
