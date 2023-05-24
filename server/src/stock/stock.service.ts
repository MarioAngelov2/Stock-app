import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getDataByTimeSlice(start: string, end: string): any {
    const mockData = [
      {
        id: 1,
        name: 'Tesla',
        price: '$299',
        timestamp: '2023-05-22T12:00:00Z',
      },
      {
        id: 2,
        name: 'Tesla',
        price: '$280',
        timestamp: '2023-05-22T12:00:10Z',
      },
      {
        id: 3,
        name: 'Tesla',
        price: '$250',
        timestamp: '2023-05-22T12:00:20Z',
      },
      {
        id: 4,
        name: 'Tesla',
        price: '$320',
        timestamp: '2023-05-22T12:00:30Z',
      },
      {
        id: 5,
        name: 'Tesla',
        price: '$320',
        timestamp: '2023-05-22T12:00:40Z',
      },
    ];

    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();

    const filtetedData = mockData.filter((item) => {
      const itemTime = new Date(item.timestamp).getTime();
      return itemTime >= startTime && itemTime <= endTime;
    });

    return filtetedData;
  }
}
