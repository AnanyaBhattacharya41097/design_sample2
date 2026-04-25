import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { AnimatedBackground } from "./AnimatedBackground";

interface SplashScreenProps {
  onContinue: () => void;
}

export function SplashScreen({ onContinue }: SplashScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <GlassCard className="max-w-3xl w-full p-16 text-center" glow>
          <motion.div
            animate={{
              rotateY: [0, 5, -5, 0],
              rotateX: [0, -2, 2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-12"
          >
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-[#1741DC] to-[#8B5CF6] shadow-[0_0_60px_rgba(23,65,220,0.6)] flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 }}
          >
            Credit Assessment
            <br />
            AI Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12 text-white/70 max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            Next-generation AI-powered credit evaluation system with real-time risk analysis and automated decision intelligence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <NeonButton onClick={onContinue} variant="primary">
              Enter Platform
            </NeonButton>
          </motion.div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-white/40"
            style={{ fontSize: "0.875rem" }}
          >
            Powered by Advanced AI Neural Networks
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
