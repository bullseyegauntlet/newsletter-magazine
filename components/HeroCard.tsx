"use client";
import { ArticleItem } from "@/lib/types";

export default function HeroCard({ item }: { item: ArticleItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "#111111",
        borderLeft: "4px solid #f59e0b",
        borderRadius: "4px",
        padding: "2.5rem 2rem",
        marginBottom: "3rem",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#161616";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#111111";
      }}
    >
      {/* Featured badge */}
      <div style={{ marginBottom: "1rem" }}>
        <span
          style={{
            background: "#f59e0b",
            color: "#0a0a0a",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "2px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          ★ Top Story
        </span>
      </div>

      <h2
        className="font-serif"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          color: "#f3f4f6",
          marginBottom: "1rem",
          maxWidth: "680px",
        }}
      >
        {item.headline}
      </h2>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "15px",
          lineHeight: 1.7,
          maxWidth: "620px",
          marginBottom: "1.5rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {item.summary}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <span
          style={{
            background: "#1a1a1a",
            border: "1px solid #2d2d2d",
            color: "#f59e0b",
            borderRadius: "3px",
            padding: "3px 10px",
            fontSize: "11px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          {item.source}
        </span>
        {item.tags.map((t) => (
          <span
            key={t}
            style={{
              color: "#6b7280",
              fontSize: "11px",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            #{t}
          </span>
        ))}
        <span
          style={{
            marginLeft: "auto",
            color: "#f59e0b",
            fontSize: "13px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          Read more →
        </span>
      </div>
    </a>
  );
}
