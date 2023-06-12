import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getData(@Query('start') start?: string, @Query('end') end?: string) {

    if (!start || !end) {
      throw new BadRequestException('Missing start or end parameter');
    }

    const URL = this.stockService.getFormattedURL(start, end);
    const PRICES = this.stockService.getPrices(start, end)

    const response = {
      stockData: URL,
      bestPrices: PRICES,
    }

    return response;
  }
}
