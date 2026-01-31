import { Controller, Get, Query } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Get()
  async getWatchlist(@Query('username') username: string) {
    console.log('[CONTROLLER] Incoming request');
    console.log('[CONTROLLER] username =', username);

    try {
      if (!username) {
        return { error: 'username is required' };
      }

      const movies = await this.watchlistService.getWatchlist(username);

      console.log('[CONTROLLER] Returning movies:', movies.length);
      return { movies };
    } catch (error) {
      console.error('[CONTROLLER] ERROR', error);
      throw error;
    }
  }
}
