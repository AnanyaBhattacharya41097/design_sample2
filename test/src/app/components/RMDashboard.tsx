import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { AnimatedBackground } from "./AnimatedBackground";
import { FileText, Upload, Clock, CheckCircle, XCircle } from "lucide-react";

interface RMDashboardProps {
  onNavigateToUpload: () => void;
  onViewCAM: (id: string) => void;
}

const applications = [
  { id: "APP001", customer: "ABC Corp", amount: "₹50,00,000", status: "pending", stage: "Documentation", lastUpdate: "2 hours ago" },
  { id: "APP002", customer: "XYZ Industries", amount: "₹1,25,00,000", status: "approved", stage: "CAM Generated", lastUpdate: "1 day ago" },
  { id: "APP003", customer: "Tech Solutions Ltd", amount: "₹75,00,000", status: "review", stage: "Under Review", lastUpdate: "3 hours ago" },
  { id: "APP004", customer: "Global Traders", amount: "₹2,00,00,000", status: "pending", stage: "Awaiting Upload", lastUpdate: "5 hours ago" },
  { id: "APP005", customer: "Innovate Pvt Ltd", amount: "₹90,00,000", status: "rejected", stage: "Risk Assessment Failed", lastUpdate: "2 days ago" },
];

export function RMDashboard({ onNavigateToUpload, onViewCAM }: RMDashboardProps) {
  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30",
      approved: "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30",
      review: "bg-[#1741DC]/20 text-[#1741DC] border-[#1741DC]/30",
      rejected: "bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30",
    };
    return styles[status as keyof typeof styles];
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
              RM Dashboard
            </h1>
            <p className="text-white/60">Welcome back, Relationship Manager</p>
          </div>

          <NeonButton onClick={onNavigateToUpload} variant="primary">
            <Upload className="inline mr-2" size={20} />
            New Application
          </NeonButton>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Applications", value: "24", icon: FileText, color: "#1741DC" },
            { label: "Pending Review", value: "8", icon: Clock, color: "#F59E0B" },
            { label: "Approved", value: "12", icon: CheckCircle, color: "#10B981" },
            { label: "Rejected", value: "4", icon: XCircle, color: "#EF4444" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6" hover glow>
                <div className="flex items-center justify-between mb-4">
                  <stat.icon size={32} style={{ color: stat.color }} />
                  <div className="text-right">
                    <div className="text-white/60" style={{ fontSize: "0.875rem" }}>{stat.label}</div>
                    <div className="text-white" style={{ fontSize: "2rem", fontWeight: 700 }}>{stat.value}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard className="p-8" glow>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-white" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Recent Applications
            </h2>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors">
                All
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors">
                Pending
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors">
                Approved
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Application ID</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Customer</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Amount</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Stage</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Status</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Last Update</th>
                  <th className="text-left py-4 px-4 text-white/70" style={{ fontSize: "0.875rem" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <motion.tr
                    key={app.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="border-b border-white/5 cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-4 text-white">{app.id}</td>
                    <td className="py-4 px-4 text-white">{app.customer}</td>
                    <td className="py-4 px-4 text-white">{app.amount}</td>
                    <td className="py-4 px-4 text-white/80">{app.stage}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full border ${getStatusBadge(app.status)}`} style={{ fontSize: "0.875rem" }}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white/60">{app.lastUpdate}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => onViewCAM(app.id)}
                        className="text-[#1741DC] hover:text-[#1E4FFF] transition-colors"
                      >
                        View →
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
