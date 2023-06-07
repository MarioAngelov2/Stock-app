import { Injectable } from '@nestjs/common';
import { formatISO, max, parseISO } from 'date-fns';
import { StockDataService } from 'src/stock-data/stock-data.service';

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

    const startingDate = parseISO(start);
    const endingDate = parseISO(end);

    const filteredData = Object.entries(this.stockDataService.dataStore).filter(
      ([_, item]) => {
        const itemTime = parseISO((item as StockData).timestamp);
        return itemTime >= startingDate && itemTime <= endingDate;
      },
    );

    return filteredData.map(([_, stock]) => stock as StockData);
  }

  // generates min Price, max Price
  getPrices(start: string, end: string): any {
    const startingDate = parseISO(start);
    const endingDate = parseISO(end);

    if (start && end) {
      const filteredData = Object.entries(
        this.stockDataService.dataStore,
      ).filter(([_, item]) => {
        const itemTime = parseISO((item as StockData).timestamp);
        return itemTime >= startingDate && itemTime <= endingDate;
      });

      let maxPrice = Number.MIN_VALUE;
      let minPrice = Number.MAX_VALUE;

      filteredData.forEach(([_, stock]) => {
        const price = (stock as StockData).price;

        if (price > maxPrice) {
          maxPrice = price;
        }
        if (price < minPrice) {
          minPrice = price;
        }
      });

      return { maxPrice, minPrice };
    }
  }
}
