import * as cheerio from 'cheerio';
import {
  ATTR_ITEM_LINK,
  ATTR_ITEM_NAME,
  WATCHLIST_ITEM_SELECTOR,
} from './letterboxd.selectors';
import { LetterboxdMovie } from './letterboxd.types';

export function parseWatchlistHtml(html: string): LetterboxdMovie[] {
  const $ = cheerio.load(html);
  const movies: LetterboxdMovie[] = [];

  $(WATCHLIST_ITEM_SELECTOR).each((_, element) => {
    const rawTitle = $(element).attr(ATTR_ITEM_NAME);
    const rawLink = $(element).attr(ATTR_ITEM_LINK);

    if (!rawTitle || !rawLink) {
      console.log('[SCRAPER][PARSER] Missing attributes');
      return;
    }

    const { title, year } = extractTitleAndYear(rawTitle);

    movies.push({
      title,
      year,
      link: buildMovieLink(rawLink),
    });
  });

  return movies;
}

function extractTitleAndYear(rawTitle: string): {
  title: string;
  year: string | null;
} {
  const yearMatch = rawTitle.match(/\((\d{4})\)$/);

  return {
    title: rawTitle.replace(/\s*\(\d{4}\)$/, ''),
    year: yearMatch ? yearMatch[1] : null,
  };
}

function buildMovieLink(relativeLink: string): string {
  return `https://letterboxd.com${relativeLink}`;
}
