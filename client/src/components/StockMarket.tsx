import { useState } from "react";
import "../style/StockMarket.css";
import { getStocks } from "../services/requester";
import { StockMarketData } from "./StockMarketData";
import ReactPaginate from "react-paginate";
import { ReactPaginateProps } from "react-paginate";

export interface IAppProps {}

interface StockItem {
  id: number;
  price: number;
  name: string;
  timestamp: string;
}

export function StockMarket() {
  const [data, setData] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState<any>(0);

  const stocksPerPage = 20;
  const pagesVisited = pageNumber * stocksPerPage;

  const handleDataQuery = (params: { start: string; end: string }) => {
    getStocks(params).then((result) => {
      setData(result);
    });
  };

  const renderStocks =
    data.length > 0 ? (
      <div className="stockData-container">
        <h3>Stock Prices</h3>
        <div className="stockList-container">
          <ul>
            {data
              .slice(pagesVisited, pagesVisited + stocksPerPage)
              .flatMap(([_, stock]: any) => (
                <li key={stock.timestamp}>
                  {stock.name}: ${stock.price} -{" "}
                  {new Date(stock.timestamp).toLocaleString()}
                </li>
              ))}
          </ul>
        </div>
      </div>
    ) : (
      <h3>No stock data available.</h3>
    );

  const pageCount = Math.ceil(data.length / stocksPerPage);

  const pageChange = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <StockMarketData onQuery={handleDataQuery} />
        {renderStocks}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"prevButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
