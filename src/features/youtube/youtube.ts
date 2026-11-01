export interface YtComment {
  author: string;
  channelId: string;
  text: string;
  publishedAt: string;
}

/** Extracts an 11-character video ID from common YouTube URL shapes or a bare ID. */
export function parseVideoId(input: string): string | null {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^(www\.|m\.|music\.)/, "");
    if (host === "youtu.be") return u.pathname.slice(1, 12).match(/^[\w-]{11}$/)?.[0] ?? null;
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const v = u.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
      const m = u.pathname.match(/^\/(?:shorts|live|embed|v)\/([\w-]{11})/);
      return m?.[1] ?? null;
    }
  } catch {
    /* not a URL */
  }
  return null;
}

/** Parses pasted lines in the form "Name: comment" (or just "Name"). */
export function parsePastedComments(text: string): YtComment[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const i = line.indexOf(":");
      const author = (i > 0 ? line.slice(0, i) : line).trim().replace(/^@/, "");
      return { author, channelId: author.toLowerCase(), text: i > 0 ? line.slice(i + 1).trim() : "", publishedAt: "" };
    });
}
