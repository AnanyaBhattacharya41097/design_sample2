import { motion } from "motion/react";

export function NuviaFeatures() {
  const features = [
    {
      number: "01",
      text: "AI scans millions of transaction points to predict and optimize user patterns.",
    },
    {
      number: "02",
      text: "Nuvia's system adjusts credit limits, rewards, and risk levels in real time.",
    },
    {
      number: "03",
      text: "Continuous monitoring ensures fraud probability stays below 0.05%.",
    },
  ];

  const bigWords = ["Analyze", "Adapt", "Protect"];

  return (
    <section
      id="features"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        background: "#05070D",
      }}
    >
      {/* Background glow - top right purple */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(88, 28, 220, 0.25) 0%, rgba(109, 40, 217, 0.1) 40%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      {/* Bottom left subtle glow */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "-10%",
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(88, 28, 220, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 32px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "flex-start",
          }}
        >
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: "600",
                color: "#D4A853",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                margin: 0,
                background:
                  "linear-gradient(135deg, #E8C47A 0%, #C4973E 40%, #A87830 70%, #C4973E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              How Nuvia
              <br />
              Redefines Digital
              <br />
              Banking
            </h2>
          </motion.div>

          {/* Right description + floating orb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: "relative", paddingTop: "8px" }}
          >
            {/* Floating grey orb */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(150, 150, 180, 0.5), rgba(100, 100, 140, 0.2))",
                left: "-60px",
                top: "50px",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: "1.7",
                margin: 0,
                maxWidth: "380px",
              }}
            >
              Behind every instant payment, investment, or transaction — a neural
              system that learns and protects in milliseconds.
            </p>
          </motion.div>
        </div>

        {/* Bottom row - Big words + numbered list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "flex-start",
          }}
        >
          {/* Big animated words */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {bigWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(60px, 8vw, 110px)",
                    fontWeight: "700",
                    color: "#ffffff",
                    lineHeight: "1.0",
                    letterSpacing: "-0.04em",
                    background:
                      "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Numbered features list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              paddingTop: "20px",
            }}
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "28px 0",
                  borderBottom:
                    i < features.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "1.6",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {feat.text}
                </p>
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.25)",
                    fontWeight: "400",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {feat.number}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
