import { useState } from "react";
import { NuviaNavbar } from "./components/NuviaNavbar";
import { NuviaHero } from "./components/NuviaHero";
import { NuviaFeatures } from "./components/NuviaFeatures";
import { NuviaCard } from "./components/NuviaCard";
import { LoginModal } from "./components/LoginModal";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#05070D",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Fixed Navigation */}
      <NuviaNavbar onLoginClick={() => setIsLoginOpen(true)} />

      {/* Scrollable content */}
      <main>
        {/* Section 1 — Hero */}
        <NuviaHero />

        {/* Section 2 — Features */}
        <NuviaFeatures />

        {/* Section 3 — Finance Card */}
        <NuviaCard />
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={() => setIsLoggedIn(true)}
      />

      {/* Spinner keyframes */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        ::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  );
}
