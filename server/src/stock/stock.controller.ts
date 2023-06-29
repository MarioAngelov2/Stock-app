import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { isValid, parseISO } from 'date-fns';
import { QueryParamsDto } from './queryParams.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getData(@Query() queryParams: QueryParamsDto) {
    const { start, end } = queryParams;

    const URL = this.stockService.getFormattedURL(start, end);
    const PRICES = this.stockService.getPrices(start, end);

    const response = {
      stockData: URL,
      bestPrices: PRICES,
    };

    return response;
  }
}
