import { Test, TestingModule } from '@nestjs/testing';
import { StockDataService } from './stockData.service';
import { subDays } from 'date-fns';

describe('StockDataService', () => {
  let service: StockDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockDataService],
    }).compile();

    service = module.get<StockDataService>(StockDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate and store data with the expected properties', () => {
    service.generateAndStoreData();

    expect(service.dataStore).toBeDefined();

    for (const key in service.dataStore) {
      const dataEntry = service.dataStore[key];

      expect(dataEntry.id).toEqual(key);
      expect(dataEntry.name).toEqual('Tesla');
      expect(dataEntry.price).toMatch(/^\d+(\.\d{1,2})?$/);
      expect(dataEntry.timestamp).toEqual(key);
    }
  });

  it('should price be withing a range from 1.00 to 2.00', () => {
    for (const key in service.dataStore) {
      const dataEntry = service.dataStore[key];

      const price = parseFloat(dataEntry.price);
      const minPrice = 0;
      const maxPrice = 10;

      expect(price).toBeGreaterThanOrEqual(minPrice);
      expect(price).toBeLessThanOrEqual(maxPrice)
    }
  })

  it('should time follow specifict time format', () => {
    service.generateAndStoreData();

    expect(service.dataStore).toBeDefined();

    const date = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

   Object.values(service.dataStore).forEach((dataEntry: any) => {
    expect(dataEntry.timestamp).toMatch(date)
   })
  })
  
});
