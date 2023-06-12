import { Injectable } from '@nestjs/common';
import { parseISO, subDays } from 'date-fns';

@Injectable()
export class StockDataService {
  dataStore: any = {};
  prices: any = [];
  isGeneratedData: boolean = false;

  generateAndStoreData(): void {
    const newData = {};

    const endingDate = new Date();
    const startingDate = subDays(endingDate, 1);

    let currentTimeStamp = startingDate.getTime();

    while (currentTimeStamp <= endingDate.getTime()) {
      let currentDate = new Date(currentTimeStamp);

      let randomPrice = (1 + Math.random()).toFixed(2);

      const newDataEntry = {
        id: currentDate.toISOString(),
        name: 'Tesla',
        price: randomPrice,
        timestamp: currentDate.toISOString(),
      };

      newData[currentDate.toISOString()] = newDataEntry;
      currentTimeStamp += 1000;
    }

    this.dataStore = newData;
    this.isGeneratedData = true;
  }
}
