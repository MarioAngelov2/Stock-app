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

  const formattedDate = {
    buyTime: new Date(data.bestPrices.buyTime).toLocaleString(),
    sellTime: new Date(data.bestPrices.sellTime).toLocaleString()
  }

  const bestPrices = (
    <div className="bestPrices-container">
      <div className="buy">
        <h2>
          Best time to buy
        </h2>
        <h4>{data.bestPrices.name}</h4>
        <p>
          {formattedDate.buyTime} - ${data.bestPrices.buyPrice}
        </p>
      </div>
      <div className="sell">
        <h2>
          Best time to sell
        </h2>
        <h4>{data.bestPrices.name}</h4>
        <p>
          {formattedDate.sellTime} - ${data.bestPrices.sellPrice}
        </p>
      </div>
    </div>
  );

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {data.stockData.length > 0 ? (
          <div className="stockData-container">
            {bestPrices}
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
