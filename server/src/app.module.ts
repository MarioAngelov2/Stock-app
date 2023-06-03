import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';
import { StockDataService } from './stock-data/stock-data.service';


@Module({
  imports: [],
  controllers: [AppController, StockController],
  providers: [AppService, StockService, StockDataService],
})
export class AppModule {}
