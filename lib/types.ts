export interface ArticleItem {
  headline: string;
  summary: string;
  source: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface Section {
  id: string;
  emoji: string;
  label: string;
  items: ArticleItem[];
  highlight?: boolean;
}

export interface NewsletterData {
  issue: number;
  publishedAt: string;
  title: string;
  tagline: string;
  sources: string[];
  sections: Section[];
}
