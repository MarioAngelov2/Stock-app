import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";

export interface IAppProps {}

interface StockItem {
  id: number;
  price: number;
  name: string
  timestamp: string;
}

export function StockMarket() {
  const [data, setData] = useState<any>([]);

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result);
    });
  };

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
       {
        data.length > 0 
        ? (
          <div>
            <h3>Stock Prices</h3>
            <ul>
              {data.map((stock: StockItem) => (
                <li key={stock.id}>{stock.name}: ${stock.price}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h3>No stock data available.</h3>
        )
       }
      </div>
    </div>
  );
}
