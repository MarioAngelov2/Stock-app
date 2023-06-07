import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

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

  const chartData = data.map((stock: any) => ({
    x: new Date(stock.timestamp).toLocaleString(),
    price: stock.price,
    name: stock.name,
  }));

  const renderChart = (
    <div className="chart-container">
      <div className="chart-wrapper">
        <AreaChart width={1100} height={600} data={chartData}>
          <CartesianGrid stroke="#ccc" opacity="0.5" vertical={false} />
          <YAxis
            dataKey="price"
            axisLine={false}
            domain={["dataMin, 'dataMax"]}
            tickCount={10}
            tickLine={false}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickFormatter={(str): any => {
              return new Date(str).toLocaleTimeString();
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#1398C0"
            fill="#1398C0"
          />
        </AreaChart>
      </div>
    </div>
  );

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {data.length > 0 ? (
          <div className="stockData-container">
            <h3>STOCK PRICES</h3>
            <div className="stockList-container">{renderChart}</div>
          </div>
        ) : (
          <h3>No stock data available.</h3>
        )}
      </div>
    </div>
  );
}
