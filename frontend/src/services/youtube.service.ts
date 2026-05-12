export type YouTubeVideo = {
  id: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnailUrl: string;
};

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;

const isLikelyEducational = (title: string, channelTitle: string) => {
  const t = `${title} ${channelTitle}`.toLowerCase();
  // Very light heuristic to avoid obvious noise.
  const bad = ['shorts', '#shorts', 'music', 'song', 'lyrics', 'trailer'];
  if (bad.some((b) => t.includes(b))) return false;
  return true;
};

export const youtubeService = {
  async searchEducationalVideos(query: string, maxResults = 8): Promise<YouTubeVideo[]> {
    if (!YOUTUBE_API_KEY) return [];

    const params = new URLSearchParams({
      key: YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      q: query,
      maxResults: String(Math.min(Math.max(maxResults, 1), 12)),
      safeSearch: 'strict',
      videoCategoryId: '27', // Education
      videoEmbeddable: 'true',
      videoSyndicated: 'true',
      relevanceLanguage: 'en',
    });

    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
    if (!res.ok) return [];
    const json = await res.json();

    const items = Array.isArray(json?.items) ? json.items : [];
    return items
      .map((it: any) => {
        const id = it?.id?.videoId as string | undefined;
        const snippet = it?.snippet;
        if (!id || !snippet) return null;
        const title = snippet?.title as string;
        const channelTitle = snippet?.channelTitle as string;
        const thumb = snippet?.thumbnails?.high?.url || snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.default?.url;
        if (!thumb) return null;
        if (!isLikelyEducational(title, channelTitle)) return null;
        return {
          id,
          title,
          channelTitle,
          publishedAt: snippet?.publishedAt ?? '',
          thumbnailUrl: thumb,
        } satisfies YouTubeVideo;
      })
      .filter(Boolean);
  },
};

