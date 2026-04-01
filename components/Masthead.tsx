import { NewsletterData } from "@/lib/types";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Chicago",
  });
}

export default function Masthead({ data }: { data: NewsletterData }) {
  return (
    <header
      style={{
        borderBottom: "1px solid #1f1f1f",
        paddingBottom: "2rem",
        marginBottom: "0",
      }}
    >
      {/* Top bar */}
      <div
        style={{
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
        Gauntlet AI · Intelligence Digest · Issue #{data.issue}
      </div>

      {/* Masthead */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#f3f4f6",
            marginBottom: "1rem",
          }}
        >
          THE BRIEFING
        </h1>

        {/* Rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            margin: "0 auto 1.25rem",
            maxWidth: "400px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#333" }} />
          <span style={{ color: "#9ca3af", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {formatDate(data.publishedAt)}
          </span>
          <div style={{ flex: 1, height: "1px", background: "#333" }} />
        </div>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            letterSpacing: "0.05em",
            marginBottom: "1.75rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {data.tagline}
        </p>

        {/* Source pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          {data.sources.map((s) => (
            <span
              key={s}
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "#9ca3af",
                borderRadius: "100px",
                padding: "4px 12px",
                fontSize: "11px",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
