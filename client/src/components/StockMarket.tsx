import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";
import { subDays } from "date-fns";

export interface IAppProps {}

interface StockItem {
  id: number;
  price: number;
  name: string;
  timestamp: string;
}

export function StockMarket() {
  const [data, setData] = useState<any>([]);

  const endDate = new Date();
  const startDate = subDays(endDate, 1);

  let currentTimeStamp = startDate.getTime();

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result);
    });
  };

  const renderStocks =
    data.length > 0 ? (
      <div className="stockData-container">
        <h3>Stock Prices</h3>
        <ul>
          {data.flatMap(([_, stock]: any) => (
            <li key={stock.timestamp}>
              {stock.name}: {stock.price} - {stock.timestamp}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <h3>No stock data available.</h3>
    );

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {renderStocks}
      </div>
    </div>
  );
}
