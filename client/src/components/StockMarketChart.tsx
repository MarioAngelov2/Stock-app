import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

export interface Props {
  data: any[];
}

export function StockMarketChart(props: Props) {
  const { data } = props;

  const chartData = data.map((stock: any) => ({
    x: new Date(stock.timestamp).toLocaleString(),
    price: stock.price,
    name: stock.name,
  }));

  return (
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
}
