import { Injectable } from '@nestjs/common';
import { formatISO, parseISO } from 'date-fns';
import { StockDataService } from 'src/stock-data/stock-data.service';

@Injectable()
export class StockService {
  constructor(private readonly stockDataService: StockDataService) {};

  getFormattedURL(start: string, end: string): any {

    if (!this.stockDataService.isGeneratedData) {
      this.stockDataService.generateAndStoreData()
    }

    const mockData = [
      {
        id: 1,
        name: 'Tesla',
        price: '$299',
        timestamp: '2023-06-02T10:00:00',
      },
      {
        id: 2,
        name: 'Tesla',
        price: '$280',
        timestamp: '2023-06-02T10:00:10',
      },
      {
        id: 3,
        name: 'Tesla',
        price: '$250',
        timestamp: '2023-06-02T10:00:20',
      },
      {
        id: 4,
        name: 'Tesla',
        price: '$320',
        timestamp: '2023-06-02T10:00:30',
      },
      {
        id: 5,
        name: 'Tesla',
        price: '$320',
        timestamp: '2023-06-02T10:00:40',
      },
    ];

    const startingDate = parseISO(start);
    const endingDate = parseISO(end);

    const filteredData = Object.entries(this.stockDataService.dataStore).filter(([key, item]) => {
      const itemTime = parseISO(item.timestamp)
      return itemTime >= startingDate && itemTime <= endingDate;
    });

    return filteredData;

    // const formattedStarting = formatISO(startingDate);
    // const formattedEnding = formatISO(endingDate);

    // const URL = `http://localhost:2000/stock?starting=${formattedStarting}&ending=${formattedEnding}`;

    // const filteredData = mockData.filter((item) => {
    //   const itemTime = parseISO(item.timestamp);
    //   return itemTime >= startingDate && itemTime <= endingDate; 
    // })

    // return filteredData;
  }

}
