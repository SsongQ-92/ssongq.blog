import { baseURL, blogDesc, blogName } from '@/config/const';
import { asyncGetPostListRss } from '@/lib/post';

export async function GET() {
  const rssPostList = await asyncGetPostListRss();

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">

  <channel>
    <title>${blogName}</title>
    <link>${baseURL}</link>
    <description>${blogDesc}</description>
    ${rssPostList
      .map(({ title, link, pubDate }) => {
        return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <pubDate>${pubDate}</pubDate>
        </item>
      `;
      })
      .join('')}
  </channel>

  </rss>`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    }
  );
}
