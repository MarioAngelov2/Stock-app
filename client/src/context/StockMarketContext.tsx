import React from 'react';

interface StockMarketContextValues {
  startTime: string;
  endTime: string;
  setStartEndTime: (startTime: string, endTime: string) => void;
}

export const StockMarketContext = React.createContext<StockMarketContextValues>({
  startTime: '',
  endTime: '',
  setStartEndTime: () => {},
})