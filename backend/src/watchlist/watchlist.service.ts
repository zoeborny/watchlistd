import { Injectable } from '@nestjs/common';
import { scrapeWatchlist } from '../scraper/letterboxd.scraper';
import { getFakeStreamingPlatforms } from '../helpers/streaming.helper';

@Injectable()
export class WatchlistService {
  async getWatchlist(username: string) {
    const movies = await scrapeWatchlist(username);

    return movies.map((movie) => ({
      ...movie,
      platforms: getFakeStreamingPlatforms(movie.title),
    }));
  }
}
