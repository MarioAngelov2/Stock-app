import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from './stock.service';
import { StockDataService } from '../stockData/stockData.service';
import { subDays } from 'date-fns';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockService, StockDataService],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFormattedURL', () => {
    it('should receive an array of stock data objects with required properties', () => {
      const start = subDays(new Date(), 1).toISOString();
      const end = new Date().toISOString();

      const resultParams = service.getFormattedURL(start, end);

      resultParams.forEach((result) => {
        expect(result).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            price: expect.any(String),
            timestamp: expect.any(String),
          }),
        );
      });
    });
  });
});
