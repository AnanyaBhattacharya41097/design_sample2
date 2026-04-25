import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className = "", hover = false, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { scale: 1.02, boxShadow: "0 0 40px rgba(23, 65, 220, 0.4)" } : {}}
      className={`
        relative backdrop-blur-[40px] bg-white/5
        border border-white/10 rounded-2xl
        ${glow ? "shadow-[0_0_30px_rgba(23,65,220,0.3)]" : ""}
        ${className}
      `}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      {children}
    </motion.div>
  );
}
