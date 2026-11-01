import { parseVideoId, type YtComment } from "@/features/youtube/youtube";

export const dynamic = "force-dynamic";

// 40 pages x 100 = 4,000 top-level comments, which stays under Workers' subrequest limits.
const MAX_PAGES = 40;

const json = (body: unknown, status = 200, cache = "no-store") =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": cache } });

/**
 * GET /api/youtube-comments?v=<video id or URL>
 * Proxies the YouTube Data API v3 so the API key stays on the server.
 * GET /api/youtube-comments?check=1 reports whether loading is configured (always 200),
 * so the UI can start in paste mode without triggering an error response.
 */
export async function GET(request: Request) {
  const key = process.env.YOUTUBE_API_KEY;
  if (new URL(request.url).searchParams.has("check")) return json({ configured: Boolean(key) }, 200, "public, max-age=0, s-maxage=3600");
  if (!key) return json({ error: "not_configured", message: "Automatic comment loading isn't enabled on this site." }, 503);

  const videoId = parseVideoId(new URL(request.url).searchParams.get("v") ?? "");
  if (!videoId) return json({ error: "bad_request", message: "That doesn't look like a YouTube video link." }, 400);

  const comments: YtComment[] = [];
  let pageToken = "";
  let truncated = false;
  for (let page = 0; page < MAX_PAGES; page++) {
    const api = new URL("https://www.googleapis.com/youtube/v3/commentThreads");
    api.search = new URLSearchParams({ part: "snippet", videoId, maxResults: "100", textFormat: "plainText", key, ...(pageToken ? { pageToken } : {}) }).toString();
    const res = await fetch(api, { headers: { accept: "application/json" } });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { error?: { errors?: { reason?: string }[] } } | null;
      const reason = body?.error?.errors?.[0]?.reason;
      if (reason === "commentsDisabled") return json({ error: "comments_disabled", message: "Comments are turned off for this video." }, 422);
      if (reason === "videoNotFound" || res.status === 404) return json({ error: "not_found", message: "Video not found. Check the link and that the video is public." }, 404);
      if (reason === "quotaExceeded") return json({ error: "quota", message: "The daily YouTube API quota has been used up. Paste comments instead or try again tomorrow." }, 429);
      return json({ error: "upstream", message: "YouTube didn't respond as expected. Try again shortly." }, 502);
    }
    const data = (await res.json()) as {
      nextPageToken?: string;
      items?: { snippet: { topLevelComment: { snippet: { authorDisplayName: string; authorChannelId?: { value: string }; textDisplay: string; publishedAt: string } } } }[];
    };
    for (const item of data.items ?? []) {
      const s = item.snippet.topLevelComment.snippet;
      comments.push({ author: s.authorDisplayName.replace(/^@/, ""), channelId: s.authorChannelId?.value ?? s.authorDisplayName, text: s.textDisplay.slice(0, 500), publishedAt: s.publishedAt });
    }
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
    if (page === MAX_PAGES - 1) truncated = true;
  }
  return json({ videoId, comments, truncated }, 200, "public, max-age=0, s-maxage=300");
}
