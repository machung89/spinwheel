/** Article body blocks. Inline text supports [link text](/path/) and **bold**. */
export type Block = { h2: string } | { h3: string } | { p: string } | { ul: string[] } | { ol: string[] } | { tip: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  published: string;
  updated?: string;
  author: string;
  readingMinutes: number;
  tags: string[];
  body: Block[];
  /** Landing page slugs promoted at the end of the article. */
  tools: string[];
}
