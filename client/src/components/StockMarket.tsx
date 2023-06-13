import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";
import { StockMarketChart } from "./StockMarketChart";
import { StockMarketBestPrices } from "./StockMarketBestPrices";

interface StockItem {
  id: number;
  price: number;
  name: string;
  timestamp: string;
}

interface BestPrices {
  name: string;
  buyPrice: number;
  sellPrice: number;
  buyTime: string;
  sellTime: string;
}

export function StockMarket() {

  const [data, setData] = useState<{
    stockData: StockItem[];
    bestPrices: BestPrices;
  }>({
    stockData: [],
    bestPrices: {
      name: "",
      buyPrice: 0,
      sellPrice: 0,
      buyTime: "",
      sellTime: "",
    },
  });

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result);
    });
  };

  return (
    <div className="stockMarket-container" id="stockMarket">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {data.stockData.length > 0 ? (
          <div className="stockData-container">
            <StockMarketBestPrices data={data}/>
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
