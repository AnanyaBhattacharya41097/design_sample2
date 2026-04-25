import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function NuviaCard() {
  return (
    <section
      id="cards"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        background: "#05070D",
      }}
    >
      {/* Warm gradient background - left/center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 80% at 30% 60%, rgba(120, 40, 80, 0.45) 0%, rgba(80, 20, 60, 0.3) 30%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 60% at 20% 70%, rgba(180, 80, 40, 0.25) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Small floating pink/peach orb top center */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(240, 180, 140, 0.85), rgba(200, 120, 100, 0.5))",
          top: "120px",
          left: "42%",
          zIndex: 10,
          boxShadow: "0 0 20px rgba(240, 180, 140, 0.4)",
        }}
      />
      {/* Small floating grey orb bottom center */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
        style={{
          position: "absolute",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(150, 150, 180, 0.5), rgba(100, 100, 140, 0.2))",
          bottom: "160px",
          left: "55%",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 10,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 32px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gap: "40px",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {/* Left - Heading + CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            zIndex: 5,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Finance That
            <br />
            Thinks Ahead
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginTop: "auto", paddingTop: "200px" }}
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
              Experience the Future
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Center - Glass Credit Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotateZ: [-2, 0, -2] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            style={{
              width: "340px",
              height: "220px",
              borderRadius: "20px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.08) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(180, 80, 100, 0.15), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)",
              transform:
                "perspective(900px) rotateX(5deg) rotateY(8deg) rotateZ(-8deg)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glass shimmer */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-30%",
                width: "80%",
                height: "160%",
                background:
                  "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.07) 60%, transparent 80%)",
                transform: "rotate(10deg)",
                pointerEvents: "none",
              }}
            />

            {/* Card top - brand */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.04em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Nuv
                <span style={{ position: "relative", display: "inline" }}>
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "rgba(200, 160, 255, 0.9)",
                    }}
                  />
                  i
                </span>
                a
              </span>
            </div>

            {/* Card bottom content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Card number rows - dots */}
              {[0, 1, 2].map((row) => (
                <div key={row} style={{ display: "flex", gap: "20px" }}>
                  {[0, 1, 2, 3].map((group) => (
                    <div
                      key={group}
                      style={{ display: "flex", gap: "4px", alignItems: "center" }}
                    >
                      {[0, 1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          style={{
                            width: row === 2 && group >= 2 ? "6px" : "5px",
                            height: row === 2 && group >= 2 ? "6px" : "5px",
                            borderRadius: "50%",
                            backgroundColor:
                              row === 2 && group >= 2
                                ? "rgba(255,255,255,0.75)"
                                : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              {/* Chip */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "4px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "34px",
                    borderRadius: "6px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr 1fr",
                    gap: "3px",
                    padding: "4px",
                  }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        background:
                          i === 4
                            ? "rgba(255,255,255,0.3)"
                            : "rgba(255,255,255,0.1)",
                        borderRadius: "1px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - description texts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingTop: "120px",
            zIndex: 5,
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Every transaction refines Nuvia's intelligence — predicting,
            securing, and evolving with you.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Experience a future where your financial system anticipates your
            needs and adapts in real time to your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
