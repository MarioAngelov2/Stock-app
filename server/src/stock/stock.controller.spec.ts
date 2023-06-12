import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { StockDataService } from '../stockData/stockData.service';
import { BadRequestException } from '@nestjs/common';

describe('StockController', () => {
  let controller: StockController;
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [StockService, StockDataService],
    }).compile();

    controller = module.get<StockController>(StockController);
    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getData', () => {
    it('should throw BadRequestException if start or end parameters are missing', () => {
      // Arrange
      const start = undefined;
      const end = undefined;

      // Act & Assert
      expect(() => controller.getData(start, end)).toThrowError(
        BadRequestException,
      );
    });

    it('should throw an error if one of the date parameters are missing', () => {
      const start = undefined;
      const end = '2023-01-31';

      expect(() => controller.getData(start, end)).toThrowError(
        BadRequestException,
      );
    });

    it('shoud call stockService methods with the correct parameters', () => {
      // Arrage
      const start = '2023-01-01' as string;
      const end = '2023-01-31' as string;
      const expectedURL =
        'http://example.com/stockData?start=2023-01-01&end=2023-01-31';
      const expectedPrices = {
        name: 'Test Stock',
        buyPrice: 10,
        sellPrice: 20,
        buyTime: '2023-01-01',
        sellTime: '2023-01-31',
      };

      const getFormattedURLSpy = jest
        .spyOn(service, 'getFormattedURL')
        .mockImplementation(
          (start, end) =>
            `http://example.com/stockData?start=${start}&end=${end}`,
        );

      const getPricesSpy = jest
        .spyOn(service, 'getPrices')
        .mockImplementation((start, end) => ({
          name: 'Test Stock',
          buyPrice: 10,
          sellPrice: 20,
          buyTime: start,
          sellTime: end,
        }));
      // Act
      const result = controller.getData(start, end);

      // Assert
      expect(getFormattedURLSpy).toHaveBeenCalledWith(start, end);
      expect(getPricesSpy).toHaveBeenCalledWith(start, end);
      expect(result).toEqual({
        stockData: expectedURL,
        bestPrices: expectedPrices,
      });
    });
  });
});
