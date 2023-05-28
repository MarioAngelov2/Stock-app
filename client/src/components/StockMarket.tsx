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
        data.map((item: StockItem) => (
          <h1 key={item.id}>{item.timestamp}</h1>
        ))
       }
      </div>
    </div>
  );
}
