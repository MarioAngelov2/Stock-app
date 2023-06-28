import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';

const pathToWorker = __dirname + '/worker'

@Injectable()
export class StockDataService {
  dataStore: any = {};
  isGeneratedData: boolean = false;

  generateAndStoreData(): any {
    const worker = new Worker(pathToWorker)
    worker.on('message', (data) => {
      this.dataStore = data;
    });

    if (this.dataStore) {
      this.isGeneratedData = true;
    }
  }
}
