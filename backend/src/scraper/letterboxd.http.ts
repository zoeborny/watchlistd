import axios from 'axios';

const LETTERBOXD_BASE_URL = 'https://letterboxd.com';

export function buildWatchlistUrl(username: string): string {
  return `${LETTERBOXD_BASE_URL}/${username}/watchlist/`;
}

export async function fetchWatchlistHtml(url: string): Promise<string> {
  console.log('[SCRAPER][HTTP] Fetching:', url);

  const response = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    },
  });

  console.log('[SCRAPER][HTTP] Status:', response.status);

  return response.data;
}
