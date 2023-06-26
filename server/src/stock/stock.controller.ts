import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { isValid, parseISO } from 'date-fns';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getData(@Query('start') start?: string, @Query('end') end?: string) {
    if (!start || !end) {
      throw new BadRequestException('Missing start or end parameter');
    }

    if (!isValid(parseISO(start)) || !isValid(parseISO(end))) {
      throw new BadRequestException('Invalid date input');
    }

    if (parseISO(start) >= parseISO(end)) {
      throw new BadRequestException('Invalid start or end date input');
    }

    const URL = this.stockService.getFormattedURL(start, end);
    const PRICES = this.stockService.getPrices(start, end);

    const response = {
      stockData: URL,
      bestPrices: PRICES,
    };

    return response;
  }
}
