import { useState } from "react";
import { ChevronDown, User } from "lucide-react";

interface NuviaNavbarProps {
  onLoginClick: () => void;
}

export function NuviaNavbar({ onLoginClick }: NuviaNavbarProps) {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const navLinks = ["About", "Features", "Offers", "Cards", "FAQ"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(5, 7, 13, 0.75)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0px",
            }}
          >
            <span>Nuv</span>
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a855f7, #6366f1)",
                  boxShadow: "0 0 6px rgba(168, 85, 247, 0.8)",
                }}
              />
              <span>i</span>
            </span>
            <span>a</span>
          </span>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setActiveNav(link)}
              onMouseLeave={() => setActiveNav(null)}
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: activeNav === link ? "#ffffff" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Language selector */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 12px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "all 0.2s ease",
            }}
          >
            En
            <ChevronDown size={12} style={{ opacity: 0.7 }} />
          </button>

          {/* Login Button */}
          <button
            onClick={onLoginClick}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              cursor: "pointer",
              transition: "all 0.2s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.15)";
            }}
            title="Login"
          >
            <User size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}
