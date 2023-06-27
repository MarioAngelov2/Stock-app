import { Injectable } from '@nestjs/common';
import { subDays } from 'date-fns';
import { Worker } from 'worker_threads';

@Injectable()
export class StockDataService {
  dataStore: any = {};
  isGeneratedData: boolean = false;

  generateAndStoreData(): any {
    const worker = new Worker('../workers/worker.ts');
    worker.on('message', (data) => {
      this.dataStore = data;
    });

    if (this.dataStore) {
      this.isGeneratedData = true;
    }
  }

  // const worker = new Worker('../workers/worker.ts');
  // worker.on('message', (data) => {
  //   console.log(data);
  //   this.dataStore = data;
  //   this.isGeneratedData = true;

  // const newData = {};

  // const endingDate = new Date();
  // const startingDate = subDays(endingDate, 3);

  // let currentTimeStamp = startingDate.getTime();

  // while (currentTimeStamp <= endingDate.getTime()) {
  //   let currentDate = new Date(currentTimeStamp);

  //   let randomPrice = (1 + Math.random()).toFixed(2);

  //   const newDataEntry = {
  //     id: currentDate.toISOString(),
  //     name: 'Tesla',
  //     price: randomPrice,
  //     timestamp: currentDate.toISOString(),
  //   };

  //   newData[currentDate.toISOString()] = newDataEntry;
  //   currentTimeStamp += 1000;
  // }

  // this.dataStore = newData;
}
