import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { AnimatedBackground } from "./AnimatedBackground";
import { FileText, Download, Send, MessageSquare, Sparkles, TrendingUp, AlertCircle } from "lucide-react";

interface CAMViewerProps {
  applicationId: string;
  onBack: () => void;
  onApprove: () => void;
  onSendBack: () => void;
}

export function CAMViewer({ applicationId, onBack, onApprove, onSendBack }: CAMViewerProps) {
  const [activeSection, setActiveSection] = useState("summary");
  const [chatMessage, setChatMessage] = useState("");

  const sections = [
    { id: "summary", label: "Executive Summary", icon: FileText },
    { id: "financial", label: "Financial Analysis", icon: TrendingUp },
    { id: "risk", label: "Risk Assessment", icon: AlertCircle },
    { id: "recommendation", label: "Recommendation", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="text-white/70 hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            ← Back to Dashboard
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                Credit Assessment Memo
              </h1>
              <p className="text-white/60">Application ID: {applicationId}</p>
            </div>
            <div className="flex gap-4">
              <NeonButton variant="secondary">
                <Download size={20} className="inline mr-2" />
                Download
              </NeonButton>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6" glow>
              <h3 className="text-white mb-4" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3
                      ${activeSection === section.id
                        ? "bg-[#1741DC]/20 text-white border border-[#1741DC]/30 shadow-[0_0_15px_rgba(23,65,220,0.3)]"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <section.icon size={18} />
                    {section.label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="space-y-4">
                  <div>
                    <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>Credit Score</div>
                    <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>745/900</div>
                    <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-[83%] bg-gradient-to-r from-[#10B981] to-[#1741DC] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>

                  <div>
                    <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>Risk Level</div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30" style={{ fontSize: "0.875rem" }}>
                      Low Risk
                    </span>
                  </div>

                  <div>
                    <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>AI Confidence</div>
                    <div className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600 }}>94%</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6"
          >
            <GlassCard className="p-8 min-h-[600px]" glow>
              <div className="mb-6">
                <h2 className="text-white mb-4" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  {sections.find(s => s.id === activeSection)?.label}
                </h2>
              </div>

              <div className="space-y-6 text-white/80">
                {activeSection === "summary" && (
                  <div>
                    <p className="mb-4">
                      This credit assessment memo presents a comprehensive evaluation of ABC Corp's creditworthiness for a proposed facility of ₹50,00,000.
                    </p>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                      <h4 className="text-white mb-3" style={{ fontSize: "1.125rem", fontWeight: 600 }}>Company Overview</h4>
                      <ul className="space-y-2">
                        <li>• Established: 2015</li>
                        <li>• Industry: Manufacturing</li>
                        <li>• Annual Revenue: ₹12.5 Cr</li>
                        <li>• Employees: 150+</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-white mb-3" style={{ fontSize: "1.125rem", fontWeight: 600 }}>Key Highlights</h4>
                      <ul className="space-y-2">
                        <li>• Strong revenue growth (25% YoY)</li>
                        <li>• Healthy EBITDA margins (18%)</li>
                        <li>• Diversified customer base</li>
                        <li>• No defaults in credit history</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === "financial" && (
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>Revenue</div>
                        <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>₹12.5 Cr</div>
                        <div className="text-[#10B981]" style={{ fontSize: "0.875rem" }}>↑ 25% YoY</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>EBITDA</div>
                        <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>₹2.25 Cr</div>
                        <div className="text-[#10B981]" style={{ fontSize: "0.875rem" }}>↑ 18% margin</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>Debt/Equity</div>
                        <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>0.75</div>
                        <div className="text-[#10B981]" style={{ fontSize: "0.875rem" }}>Healthy</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-white/60 mb-1" style={{ fontSize: "0.875rem" }}>Current Ratio</div>
                        <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>1.8</div>
                        <div className="text-[#10B981]" style={{ fontSize: "0.875rem" }}>Strong</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "risk" && (
                  <div>
                    <div className="space-y-4">
                      <div className="bg-[#10B981]/10 rounded-xl p-4 border border-[#10B981]/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                          <div className="text-[#10B981]" style={{ fontSize: "1rem", fontWeight: 600 }}>Low Risk</div>
                        </div>
                        <p className="text-white/70">Strong financial position with consistent profitability</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>Mitigation Factors</h4>
                        <ul className="space-y-1 text-white/70">
                          <li>• Diversified revenue streams</li>
                          <li>• Strong management team</li>
                          <li>• Adequate collateral coverage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "recommendation" && (
                  <div>
                    <div className="bg-gradient-to-r from-[#10B981]/20 to-[#1741DC]/20 rounded-xl p-6 border border-[#10B981]/30 mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles size={24} className="text-[#10B981]" />
                        <h4 className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600 }}>AI Recommendation</h4>
                      </div>
                      <p className="text-white mb-2" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                        APPROVE
                      </p>
                      <p className="text-white/70">
                        Based on comprehensive analysis of financial metrics, risk factors, and industry trends, we recommend approval of the credit facility.
                      </p>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <NeonButton onClick={onApprove} variant="secondary" className="flex-1">
                        Approve Application
                      </NeonButton>
                      <NeonButton onClick={onSendBack} variant="danger" className="flex-1">
                        Send Back for Review
                      </NeonButton>
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 h-full flex flex-col" glow>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#1741DC] flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="text-white" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                  AI Assistant
                </h3>
              </div>

              <div className="flex-1 mb-4 space-y-4 overflow-y-auto max-h-[400px]">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/60 mb-2" style={{ fontSize: "0.875rem" }}>AI Assistant</div>
                  <p className="text-white/80">
                    I've analyzed the credit application. The company shows strong financials with a credit score of 745. Would you like me to explain any specific section?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask AI about this assessment..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6]/60 resize-none"
                  rows={3}
                />
                <NeonButton variant="secondary" className="w-full">
                  <Send size={18} className="inline mr-2" />
                  Send Message
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
