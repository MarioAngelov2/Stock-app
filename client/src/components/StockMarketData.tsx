import { useState, ChangeEvent } from "react";
import { addDays, format, subDays } from "date-fns";
import { getStocks } from "../services/requester";

import "../style/StockMarket.css";

export interface IAppProps {}

interface DateQueryProps {
  onQuery: (params: { start: string; end: string }) => void;
}

export function StockMarketData({ onQuery }: DateQueryProps) {
  const [selectStartingDate, setSelectStargingDate] = useState<Date | null>(
    null
  );
  const [selectEndingDate, setSelectEndingDate] = useState<Date | null>(null);

  const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDateTime = new Date(event.target.value);
    setSelectStargingDate(inputDateTime);
  };

  const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDateTime = new Date(event.target.value);
    setSelectEndingDate(inputDateTime);
  };

  const handleQuery = () => {
    const params = {
      start: selectStartingDate?.toISOString() ?? "",
      end: selectEndingDate?.toISOString() ?? "",
    };

    onQuery(params);
  };

  const currentDate = new Date();
  const substractedDate = subDays(currentDate, 3);

  return (
    <>
      <div className="dateTime-container">
        <div className="startingDate-container">
          <label>Select a starting date</label>
          <input
            type="datetime-local"
            min={format(substractedDate, "yyyy-MM-dd'T'HH:mm")}
            max={format(currentDate, "yyyy-MM-dd'T'HH:mm")}
            onChange={handleChangeStart}
          />
        </div>
        <div className="endingDate-container">
          <label>Selected an ending date</label>
          <input
            type="datetime-local"
            min={format(substractedDate, "yyyy-MM-dd'T'HH:mm")}
            max={format(currentDate, "yyyy-MM-dd'T'HH:mm")}
            onChange={handleChangeEnd}
          />
        </div>
      </div>
      <div className="button">
        <button className="search-btn" onClick={handleQuery}>
          Search
        </button>
      </div>
    </>
  );
}
