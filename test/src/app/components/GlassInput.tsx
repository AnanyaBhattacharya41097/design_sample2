import { motion } from "motion/react";
import { InputHTMLAttributes } from "react";

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function GlassInput({ label, className = "", ...props }: GlassInputProps) {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-white/80">{label}</label>}
      <motion.input
        whileFocus={{
          boxShadow: "0 0 20px rgba(23, 65, 220, 0.4)",
          borderColor: "rgba(23, 65, 220, 0.6)"
        }}
        className={`
          w-full px-6 py-4 rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          text-white placeholder:text-white/40
          focus:outline-none focus:border-[#1741DC]/60
          transition-all duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
