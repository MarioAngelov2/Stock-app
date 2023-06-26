import { Test, TestingModule } from '@nestjs/testing';
import { StockDataService } from './stockData.service';

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

    const dataEntries = Object.values(service.dataStore);

    dataEntries.forEach((dataEntry: any) => {
      expect(typeof dataEntry.id).toBe('string')
      expect(typeof dataEntry.name).toBe('string')
      expect(typeof dataEntry.price).toBe('string')
      expect(typeof dataEntry.timestamp).toBe('string')
    })
  });

  it('should price be withing a range from 1.00 to 10.00', () => {
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
