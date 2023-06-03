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

  // while (currentTimeStamp <= endDate.getTime()) {
    
  //   const cuurentDate = new Date(currentTimeStamp);
  //   console.log(cuurentDate);

  //   currentTimeStamp += 1000;

  //   if (currentTimeStamp > endDate.getTime()) {
  //     break;
  //   }
  // }

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result);
    });
  };

  console.log(data)

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {data.length > 0 ? (
          <div className="stockData-container">
            <h3>Stock Prices</h3>
            <ul>
              {data.map((stock: StockItem) => (
                <li key={stock.id}>
                  {stock.name}: ${stock.price}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <h3>No stock data available.</h3>
        )}
      </div>
    </div>
  );
}
