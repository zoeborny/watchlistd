import { buildWatchlistUrl, fetchWatchlistHtml } from './letterboxd.http';
import { parseWatchlistHtml } from './letterboxd.parser';
import { LetterboxdMovie } from './letterboxd.types';

export async function scrapeWatchlist(
  username: string,
): Promise<LetterboxdMovie[]> {
  const url = buildWatchlistUrl(username);

  const html = await fetchWatchlistHtml(url);
  const movies = parseWatchlistHtml(html);

  console.log('[SCRAPER] Movies parsed:', movies.length);

  if (movies.length === 0) {
    console.warn('[SCRAPER] No movies found — DOM structure may have changed');
  }

  return movies;
}
