import { NewsletterData, ArticleItem } from "@/lib/types";
import Masthead from "@/components/Masthead";
import HeroCard from "@/components/HeroCard";
import SectionBlock from "@/components/SectionBlock";
import EmptyState from "@/components/EmptyState";
import newsletterData from "@/public/newsletter-data.json";

function formatUpdated(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Chicago",
    timeZoneName: "short",
  });
}

export default function Home() {
  const data = newsletterData as NewsletterData;

  // Check if there's any content at all
  const totalItems = data.sections.reduce((n, s) => n + s.items.length, 0);
  if (totalItems === 0) return <EmptyState />;

  // Find featured item for hero
  let heroItem: ArticleItem | null = null;
  for (const section of data.sections) {
    const found = section.items.find((i) => i.featured);
    if (found) {
      heroItem = found;
      break;
    }
  }

  // Sections without featured item (it's shown in hero)
  const sectionsWithFiltered = data.sections.map((s) => ({
    ...s,
    items: s.items.filter((i) => !i.featured),
  }));

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Masthead data={data} />

      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
        }}
      >
        {/* Hero */}
        {heroItem && <HeroCard item={heroItem} />}

        {/* Sections */}
        {sectionsWithFiltered.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "2rem 1.5rem",
          textAlign: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#374151",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            marginBottom: "0.25rem",
          }}
        >
          Powered by Bullseye 🎯 · Gauntlet AI
        </p>
        <p
          style={{
            color: "#2d2d2d",
            fontSize: "11px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Last updated: {formatUpdated(data.publishedAt)}
        </p>
      </footer>
    </div>
  );
}
