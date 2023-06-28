import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
} from "recharts";

export interface Props {
    data: { stockData: any[] };
}

export function StockMarketChart(props: Props) {
    const { data } = props;

    const desiredDataPoints = 500;
    const totalDataPoints = data.stockData.length;
    const samplingRate = Math.ceil(totalDataPoints / desiredDataPoints);

    const sampledData = data.stockData.filter((_, index) => {
        return index % samplingRate === 0;
    });

    const chartData = sampledData.map((stock: any) => ({
        time: new Date(stock.timestamp).toLocaleString(),
        price: stock.price,
        name: stock.name,
    }));

    return (
        <div className="chart-container">
            <div className="chart-wrapper">
                <div>
                    <AreaChart width={1200} height={600} data={chartData}>
                        <CartesianGrid
                            stroke="#ccc"
                            opacity="0.5"
                            vertical={false}
                        />
                        <YAxis
                            dataKey="price"
                            axisLine={false}
                            domain={["dataMin, 'dataMax"]}
                            tickCount={10}
                            tickLine={false}
                            tickFormatter={(number) => `$${number.toFixed(2)}`}
                        />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(time): any => time}
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
        </div>
    );
}

{
    /* <div className="chart-container">
<div className="chart-wrapper">
  <div>
    <AreaChart width={1200} height={600} data={chartData}>
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
        dataKey="time"
        tickLine={false}
        axisLine={false}
        tickFormatter={(time): any => time}
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
</div>  */
}
