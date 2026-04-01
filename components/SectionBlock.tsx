import { Section } from "@/lib/types";
import ArticleCard from "./ArticleCard";

export default function SectionBlock({ section }: { section: Section }) {
  const isHighlight = section.highlight;
  const hasItems = section.items.length > 0;

  return (
    <section style={{ marginBottom: "3rem" }}>
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
          paddingBottom: "0.75rem",
          borderBottom: `2px solid ${isHighlight ? "#f59e0b" : "#1f1f1f"}`,
        }}
      >
        <span style={{ fontSize: "1.1rem" }}>{section.emoji}</span>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: isHighlight ? "#f59e0b" : "#9ca3af",
          }}
        >
          {section.label}
        </h2>
        {isHighlight && (
          <span
            style={{
              background: "#f59e0b",
              color: "#0a0a0a",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "2px 7px",
              borderRadius: "2px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Arial's Pick
          </span>
        )}
      </div>

      {hasItems ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {section.items.map((item, i) => (
            <ArticleCard key={i} item={item} accent={isHighlight} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "#374151",
            fontSize: "13px",
            fontFamily: "Inter, sans-serif",
            fontStyle: "italic",
            border: "1px dashed #1f1f1f",
            borderRadius: "4px",
          }}
        >
          Nothing to report this cycle
        </div>
      )}
    </section>
  );
}
