import { Module } from '@nestjs/common';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';
import { StockDataService } from './stockData/stockData.service';


@Module({
  imports: [],
  controllers: [StockController],
  providers: [StockService, StockDataService],
})
export class AppModule {}
