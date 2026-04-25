import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070D] via-[#0B0F1A] to-[#05070D]" />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1741DC] rounded-full blur-[150px] opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[150px] opacity-15"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#F59E0B] rounded-full blur-[120px] opacity-10"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,65,220,0.1),transparent_50%)]" />
    </div>
  );
}
