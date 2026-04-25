import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function NuviaHero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #05070D 0%, #080B15 50%, #0A0D1A 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "40px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Left Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 2 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >
              New Update 4.0
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: "700",
                color: "#ffffff",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              AI-Driven Banking
              <br />
              for the Next Era
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.6",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            A new standard in intelligent finance — where every transaction
            learns, adapts, and evolves.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "40px",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#05070D",
                fontSize: "15px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f0f0f0";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              Explore our products
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "40px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { value: "99.5%", label: "Transaction Success\nRate" },
              { value: "500K+", label: "Users Trust Nuvia's\nIntelligence" },
              { value: "<0.05%", label: "Fraud Detection\nThreshold" },
            ].map((stat) => (
              <div key={stat.value} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "clamp(28px, 3vw, 38px)",
                    fontWeight: "700",
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: "1.4",
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D Card & Orbs */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            position: "relative",
            height: "520px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Large background orbs */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(194, 65, 12, 0.85) 0%, rgba(234, 88, 12, 0.6) 40%, transparent 70%)",
              bottom: "60px",
              left: "50%",
              transform: "translateX(-30%)",
              filter: "blur(2px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(234, 179, 8, 0.7) 0%, rgba(202, 138, 4, 0.5) 40%, transparent 70%)",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-10%)",
              filter: "blur(4px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(88, 28, 220, 0.7) 0%, rgba(109, 40, 217, 0.5) 40%, transparent 70%)",
              top: "60px",
              right: "30px",
              filter: "blur(3px)",
            }}
          />
          {/* Small floating grey orb */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(150, 150, 180, 0.6), rgba(100, 100, 140, 0.3))",
              bottom: "200px",
              right: "80px",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(180, 150, 220, 0.5), rgba(120, 100, 180, 0.3))",
              top: "200px",
              left: "40px",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Dark Credit Card */}
          <motion.div
            animate={{ y: [0, -16, 0], rotateZ: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "300px",
              height: "190px",
              borderRadius: "20px",
              background: "linear-gradient(145deg, #1a1a2e 0%, #0d0d1a 40%, #111128 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(88, 28, 220, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
              transform: "perspective(800px) rotateX(8deg) rotateY(-12deg) rotateZ(5deg)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 5,
            }}
          >
            {/* Card top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              {/* Chip */}
              <div
                style={{
                  width: "42px",
                  height: "32px",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg, #c4a35a 0%, #8B6914 50%, #c4a35a 100%)",
                  border: "1px solid rgba(196, 163, 90, 0.5)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridTemplateRows: "1fr 1fr 1fr",
                  gap: "3px",
                  padding: "4px",
                  overflow: "hidden",
                }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: i === 4 ? "#c4a35a" : "rgba(139, 105, 20, 0.8)",
                      borderRadius: "1px",
                    }}
                  />
                ))}
              </div>
              {/* Contactless rings */}
              <div style={{ display: "flex", gap: "3px", marginTop: "4px" }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: `${6 + i * 4}px`,
                      height: `${6 + i * 4}px`,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      opacity: 0.5 + i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card bottom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* Card number dots */}
              <div style={{ display: "flex", gap: "16px" }}>
                {[0, 1, 2, 3].map((group) => (
                  <div key={group} style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    {[0, 1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: group === 3 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Brand name */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.05em",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Nuv
                  <span style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        top: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(168, 85, 247, 0.9)",
                      }}
                    />
                    i
                  </span>
                  a
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
