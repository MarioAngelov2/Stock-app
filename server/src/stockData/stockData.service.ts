import { Injectable } from '@nestjs/common';
import { subDays } from 'date-fns';
import { Worker } from 'worker_threads';

@Injectable()
export class StockDataService {
  dataStore: any = {};
  isGeneratedData: boolean = false;

  generateAndStoreData(): any {
    const worker = new Worker('../../workers.ts')
    worker.on('message', (data) => {
      this.dataStore = data;
    });

    if (this.dataStore) {
      this.isGeneratedData = true;
    }
  }
}
