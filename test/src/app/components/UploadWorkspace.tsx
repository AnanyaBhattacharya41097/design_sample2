import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { AnimatedBackground } from "./AnimatedBackground";
import { Upload, FileText, X, CheckCircle, Loader } from "lucide-react";

interface UploadWorkspaceProps {
  onGenerateCAM: () => void;
  onBack: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "completed" | "error";
}

export function UploadWorkspace({ onGenerateCAM, onBack }: UploadWorkspaceProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileAdd = () => {
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: `Document_${files.length + 1}.pdf`,
      size: "2.4 MB",
      progress: 0,
      status: "uploading",
    };

    setFiles([...files, newFile]);

    const interval = setInterval(() => {
      setFiles(prev => prev.map(f => {
        if (f.id === newFile.id && f.progress < 100) {
          const newProgress = Math.min(f.progress + 10, 100);
          return {
            ...f,
            progress: newProgress,
            status: newProgress === 100 ? "completed" : "uploading",
          };
        }
        return f;
      }));
    }, 200);

    setTimeout(() => clearInterval(interval), 2200);
  };

  const removeFile = (id: string) => {
    setFiles(files.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto relative z-10">
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
          <h1 className="text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Upload Documents
          </h1>
          <p className="text-white/60">Upload financial documents for credit assessment</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GlassCard
              className={`p-8 transition-all duration-300 ${isDragging ? "border-[#1741DC] shadow-[0_0_40px_rgba(23,65,220,0.5)]" : ""}`}
              glow
            >
              <div
                onDragEnter={() => setIsDragging(true)}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  handleFileAdd();
                }}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center cursor-pointer hover:border-[#1741DC]/50 transition-all"
              >
                <motion.div
                  animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                  className="mb-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#1741DC] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_30px_rgba(23,65,220,0.4)]">
                    <Upload size={40} className="text-white" />
                  </div>
                </motion.div>

                <h3 className="text-white mb-2" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  Drag & Drop Files
                </h3>
                <p className="text-white/60 mb-6">or click to browse</p>

                <NeonButton onClick={handleFileAdd} variant="primary">
                  Select Files
                </NeonButton>

                <p className="text-white/40 mt-6" style={{ fontSize: "0.875rem" }}>
                  Supported: PDF, DOCX, XLSX (Max 25MB)
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-white/80" style={{ fontSize: "0.875rem" }}>Required Documents:</h4>
                {[
                  "Financial Statements (Last 3 years)",
                  "Bank Statements (Last 6 months)",
                  "GST Returns",
                  "Income Tax Returns",
                  "KYC Documents",
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/60" style={{ fontSize: "0.875rem" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1741DC]" />
                    {doc}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GlassCard className="p-8" glow>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  Uploaded Files ({files.length})
                </h3>
                {files.length > 0 && (
                  <NeonButton onClick={onGenerateCAM} variant="secondary">
                    Generate CAM
                  </NeonButton>
                )}
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                <AnimatePresence>
                  {files.length === 0 ? (
                    <div className="text-center py-12 text-white/40">
                      <FileText size={48} className="mx-auto mb-4 opacity-30" />
                      <p>No files uploaded yet</p>
                    </div>
                  ) : (
                    files.map((file) => (
                      <motion.div
                        key={file.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#1741DC]/20 flex items-center justify-center">
                              <FileText size={20} className="text-[#1741DC]" />
                            </div>
                            <div>
                              <div className="text-white">{file.name}</div>
                              <div className="text-white/50" style={{ fontSize: "0.875rem" }}>{file.size}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {file.status === "completed" && (
                              <CheckCircle size={20} className="text-[#10B981]" />
                            )}
                            {file.status === "uploading" && (
                              <Loader size={20} className="text-[#1741DC] animate-spin" />
                            )}
                            <button
                              onClick={() => removeFile(file.id)}
                              className="text-white/40 hover:text-[#EF4444] transition-colors"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>

                        {file.status === "uploading" && (
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${file.progress}%` }}
                              className="h-full bg-gradient-to-r from-[#1741DC] to-[#8B5CF6] shadow-[0_0_10px_rgba(23,65,220,0.5)]"
                            />
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
