import { BadGatewayException, Injectable } from '@nestjs/common';
import { parseISO, isValid } from 'date-fns';
import { StockDataService } from '../stockData/stockData.service';

interface StockData {
  id: string;
  name: string;
  price: number;
  timestamp: string;
}

@Injectable()
export class StockService {
  constructor(private readonly stockDataService: StockDataService) {}

  // sends the time slice date to the client
  getFormattedURL(start: string, end: string): any {
    if (!this.stockDataService.isGeneratedData) {
      this.stockDataService.generateAndStoreData();
    }

    if (!isValid(parseISO(start)) || !isValid(parseISO(end))) {
      throw new BadGatewayException('Invalid date input');
    }

    if (parseISO(start) >= parseISO(end)) {
      throw new BadGatewayException('Invalid start or end date input')
    }

    const startingDate = parseISO(start);
    const endingDate = parseISO(end);

    const filteredData = Object.entries(this.stockDataService.dataStore).filter(
      ([_, item]: [string, StockData]) => {
        const itemTime = parseISO(item.timestamp);
        return itemTime >= startingDate && itemTime <= endingDate;
      },
    );

    if (filteredData.length === 0) {
      return [];
    } else {
      return filteredData.map(([_, stock]) => stock as StockData);
    }
  }

  // generates pfofitable times for buying and selling
  getPrices(start: string, end: string): any {
    const startingDate = parseISO(start);
    const endingDate = parseISO(end);

    let data = {};

    if (start && end) {
      const filteredData = Object.entries(
        this.stockDataService.dataStore,
      ).filter(([_, item]: [string, StockData]) => {
        const itemTime = parseISO(item.timestamp);
        return itemTime >= startingDate && itemTime <= endingDate;
      });

      let maxPrice = Number.MIN_VALUE;
      let minPrice = Number.MAX_VALUE;

      let buyTime = '';
      let sellTime = '';

      filteredData.forEach(([_, stock]) => {
        const price = (stock as StockData).price;
        const name = (stock as StockData).name;
        const timestamp = (stock as StockData).timestamp;

        if (price > maxPrice) {
          maxPrice = price;
          sellTime = timestamp;
        }
        if (price < minPrice) {
          minPrice = price;
          buyTime = timestamp;
        }

        if (new Date(buyTime) < new Date(sellTime)) {
          data = {
            name: name,
            buyPrice: minPrice,
            sellPrice: maxPrice,
            buyTime,
            sellTime,
          };
        }
      });

      return data;
    }
  }
}
