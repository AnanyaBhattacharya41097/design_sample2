import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { GlassInput } from "./GlassInput";
import { NeonButton } from "./NeonButton";
import { AnimatedBackground } from "./AnimatedBackground";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [rmId, setRmId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-md"
      >
        <GlassCard className="p-10" glow>
          <div className="text-center mb-10">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(23,65,220,0.3)",
                  "0 0 40px rgba(23,65,220,0.6)",
                  "0 0 20px rgba(23,65,220,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1741DC] to-[#8B5CF6] flex items-center justify-center"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </motion.div>

            <h2 className="text-white mb-2" style={{ fontSize: "1.875rem", fontWeight: 600 }}>
              Secure Access
            </h2>
            <p className="text-white/60">Relationship Manager Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <GlassInput
              label="RM ID"
              type="text"
              placeholder="Enter your RM ID"
              value={rmId}
              onChange={(e) => setRmId(e.target.value)}
            />

            <GlassInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/70 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <a href="#" className="text-[#1741DC] hover:text-[#1E4FFF] transition-colors">
                Forgot password?
              </a>
            </div>

            <NeonButton variant="primary" className="w-full">
              Sign In
            </NeonButton>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/50" style={{ fontSize: "0.875rem" }}>
              Protected by AI-driven security protocols
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
