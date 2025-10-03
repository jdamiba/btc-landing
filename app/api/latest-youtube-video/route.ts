import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UCQANb2YPwAtK-IQJrLaaUFw";
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    // Check if we've exceeded quota
    if (data.error && data.error.code === 403) {
      console.log("YouTube API quota exceeded, using fallback video");
      const response = NextResponse.json({
        videoId: "0AfdyK9r1uY",
        title: "Fallback Video",
        thumbnail: "https://img.youtube.com/vi/0AfdyK9r1uY/hqdefault.jpg",
      });
      response.headers.set(
        "Cache-Control",
        "public, s-maxage=7200, stale-while-revalidate=60"
      );
      return response;
    }

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 });
    }

    const video = data.items[0];
    const response = NextResponse.json({
      videoId: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
    });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=7200, stale-while-revalidate=60"
    );
    return response;
  } catch (error) {
    console.log("YouTube API error, using fallback video:", error);
    const response = NextResponse.json({
      videoId: "0AfdyK9r1uY",
      title: "Fallback Video",
      thumbnail: "https://img.youtube.com/vi/0AfdyK9r1uY/hqdefault.jpg",
    });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=7200, stale-while-revalidate=60"
    );
    return response;
  }
}
