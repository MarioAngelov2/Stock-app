import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";
import { StockMarketChart } from "./StockMarketChart";

export interface IAppProps {}

interface StockItem {
  id: number;
  price: number;
  name: string;
  timestamp: string;
}

export function StockMarket() {
  const [data, setData] = useState<any>([]);

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result.stockData);
    });
  };

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {data.length > 0 ? (
          <div className="stockData-container">
            <h3>STOCK PRICES</h3>
            <div className="stockList-container">
              <StockMarketChart data={data} />
            </div>
          </div>
        ) : (
          <h3>No stock data available.</h3>
        )}
      </div>
    </div>
  );
}
