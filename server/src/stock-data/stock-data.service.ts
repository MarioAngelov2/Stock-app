import { Injectable } from '@nestjs/common';
import { subDays } from 'date-fns';

@Injectable()
export class StockDataService {
  dataStore: any[] = [];
  isGeneratedData: boolean = false;

  generateAndStoreData(): void {
    const newData = [];

    const endingDate = new Date();
    const startingDate = subDays(endingDate, 1);

    let currentTimeStamp = startingDate.getTime();

    while (currentTimeStamp <= endingDate.getTime()) {
      let currentDate = new Date(currentTimeStamp);

      let randomPrice = (Math.random() * 100 / 2).toFixed(2);

      newData.push({
        id: '1',
        name: 'Tesla',
        price: randomPrice,
        timestamp: currentDate.toISOString(),
      });

      currentTimeStamp += 1000;
    }

    this.dataStore = newData;
    this.isGeneratedData = true;
  }
}
