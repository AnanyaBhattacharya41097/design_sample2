import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye, EyeOff, ArrowRight } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(true);
      setTimeout(() => {
        onLogin();
        onClose();
      }, 800);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 200,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "420px",
              maxWidth: "calc(100vw - 40px)",
              borderRadius: "24px",
              background: "linear-gradient(145deg, rgba(15, 18, 35, 0.95) 0%, rgba(8, 10, 20, 0.98) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(88, 28, 220, 0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
              padding: "40px",
              zIndex: 201,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              }}
            >
              <X size={14} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              {/* Nuvia logo */}
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <span>Nuv</span>
                  <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                    <span
                      style={{
                        position: "absolute",
                        top: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #a855f7, #6366f1)",
                        boxShadow: "0 0 6px rgba(168, 85, 247, 0.8)",
                      }}
                    />
                    i
                  </span>
                  a
                </span>
              </div>

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#ffffff",
                  margin: "0 0 8px 0",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.3",
                }}
              >
                Welcome back
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                Sign in to access your intelligent banking dashboard
              </p>
            </div>

            {/* Form */}
            {!loggedIn ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: "400",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@nuvia.com"
                    required
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                      fontFamily: "'Inter', sans-serif",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(88, 28, 220, 0.5)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  />
                </div>

                {/* Password */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: "400",
                    }}
                  >
                    Password
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      style={{
                        width: "100%",
                        padding: "12px 44px 12px 16px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#ffffff",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "'Inter', sans-serif",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(88, 28, 220, 0.5)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.4)",
                        cursor: "pointer",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Forgot password */}
                <div style={{ textAlign: "right" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "13px",
                      color: "rgba(150, 100, 255, 0.8)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "none",
                    background: isLoading
                      ? "rgba(88, 28, 220, 0.5)"
                      : "linear-gradient(135deg, #5b1edc 0%, #4318c0 100%)",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "4px",
                    boxShadow: isLoading ? "none" : "0 8px 30px rgba(88, 28, 220, 0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(88, 28, 220, 0.45)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = isLoading ? "none" : "0 8px 30px rgba(88, 28, 220, 0.35)";
                  }}
                >
                  {isLoading ? (
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#ffffff",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                  ) : (
                    <>
                      Sign in
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    margin: "8px 0",
                  }}
                >
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>or</span>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
                </div>

                {/* Sign up link */}
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.4)",
                    margin: 0,
                  }}
                >
                  Don't have an account?{" "}
                  <a
                    href="#"
                    style={{
                      color: "rgba(150, 100, 255, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Create one
                  </a>
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  padding: "24px 0",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(88, 28, 220, 0.4), rgba(109, 40, 217, 0.3))",
                    border: "1px solid rgba(88, 28, 220, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  ✓
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", margin: 0 }}>
                  Successfully signed in!
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
