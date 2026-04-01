"use client";
import { ArticleItem } from "@/lib/types";

export default function ArticleCard({
  item,
  accent,
}: {
  item: ArticleItem;
  accent?: boolean;
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: accent ? "#13110a" : "#111111",
        border: `1px solid ${accent ? "#2a200a" : "#1f1f1f"}`,
        borderRadius: "4px",
        padding: "1.5rem",
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = accent ? "#f59e0b" : "#333";
        el.style.background = accent ? "#1a150b" : "#161616";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = accent ? "#2a200a" : "#1f1f1f";
        el.style.background = accent ? "#13110a" : "#111111";
      }}
    >
      <h3
        className="font-serif"
        style={{
          fontSize: "1.15rem",
          fontWeight: 600,
          lineHeight: 1.3,
          color: "#f3f4f6",
          marginBottom: "0.6rem",
        }}
      >
        {item.headline}
      </h3>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "13.5px",
          lineHeight: 1.65,
          marginBottom: "1rem",
          fontFamily: "Inter, sans-serif",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {item.summary}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <span
          style={{
            background: accent ? "#1f1700" : "#1a1a1a",
            border: `1px solid ${accent ? "#3d2e00" : "#2d2d2d"}`,
            color: accent ? "#f59e0b" : "#6b7280",
            borderRadius: "3px",
            padding: "2px 8px",
            fontSize: "11px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          {item.source}
        </span>
        {item.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            style={{
              color: "#4b5563",
              fontSize: "11px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            #{t}
          </span>
        ))}
        <span
          style={{
            marginLeft: "auto",
            color: accent ? "#f59e0b" : "#4b5563",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}
