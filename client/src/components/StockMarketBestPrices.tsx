import { useState } from "react";

export interface Props {
  data: { bestPrices: any };
}

export function StockMarketBestPrices(props: Props) {
  const { data } = props;

  const [funds, setFunds] = useState<any>(0);
  const maxLength = 6;

  const formattedDate = {
    buyTime: new Date(data.bestPrices.buyTime).toLocaleString(),
    sellTime: new Date(data.bestPrices.sellTime).toLocaleString(),
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const onlyNumbers = value.replace(/[^0-9]/g, "");

    setFunds(onlyNumbers);

    if (value.length >= maxLength) {
      alert("Maximum funds exceeded");
    }
  };

  const boughtStocks = (funds * data.bestPrices.buyPrice).toFixed(2);
  const soldStocksPrice = (
    Number(boughtStocks) * data.bestPrices.sellPrice
  ).toFixed(2);
  const profit = (Number(soldStocksPrice) - funds).toFixed(2);

  return (
    <>
      <div className="bestPrices-container">
        <div className="buy">
          <h2>Best time to buy</h2>
          <h4>{data.bestPrices.name}</h4>
          <p>
            {formattedDate.buyTime} - ${data.bestPrices.buyPrice}
          </p>
        </div>
        <div className="sell">
          <h2>Best time to sell</h2>
          <h4>{data.bestPrices.name}</h4>
          <p>
            {formattedDate.sellTime} - ${data.bestPrices.sellPrice}
          </p>
        </div>
      </div>
      <div className="funds-container">
        <input placeholder="Enter your funds..." onChange={handleChange} />
        <div className="fundsResult">
          <span>Buy date: {formattedDate.buyTime}</span>
          <span>Sell date: {formattedDate.sellTime}</span>
          <span>Bought stocks: ${boughtStocks}</span>
          <span>Sold for: ${soldStocksPrice}</span>
          <span>Profit: ${profit}</span>
        </div>
      </div>
    </>
  );
}
