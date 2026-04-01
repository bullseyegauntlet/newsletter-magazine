export default function EmptyState() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#f59e0b",
          color: "#0a0a0a",
          textAlign: "center",
          padding: "6px 16px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Gauntlet AI · Intelligence Digest
      </div>

      <h1
        className="font-serif"
        style={{
          fontSize: "clamp(3rem, 10vw, 6rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: "#1f1f1f",
          marginBottom: "2rem",
          userSelect: "none",
        }}
      >
        THE BRIEFING
      </h1>

      <div
        style={{
          width: "60px",
          height: "2px",
          background: "#f59e0b",
          marginBottom: "2rem",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />

      <p
        style={{
          color: "#4b5563",
          fontSize: "15px",
          fontFamily: "Inter, sans-serif",
          marginBottom: "0.5rem",
        }}
      >
        Next issue drops at 4:00 PM CDT
      </p>
      <p
        style={{
          color: "#374151",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Compiled daily by Bullseye 🎯
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scaleX(1); }
          50% { opacity: 0.4; transform: scaleX(0.6); }
        }
      `}</style>
    </div>
  );
}
