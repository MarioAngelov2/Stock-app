import { useState, ChangeEvent } from "react";
import { addDays, format } from "date-fns";
import "../style/StockMarket.css";

export interface IAppProps {}

export function StockMarket() {
  const [selectStartingDate, setSelectStartingDate] = useState<Date | null>(
    null
  );
  const [selectEndingDate, setSelectedEndingDate] = useState<Date | null>(null);

  const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDateTime = new Date(event.target.value);
    setSelectStartingDate(inputDateTime);
  };

  const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDateTime = new Date(event.target.value);
    setSelectedEndingDate(inputDateTime);
  };

  const minDate = new Date();
  const maxDate = addDays(minDate, 3);

  return (
    <div className="stockMarket-container">
      <div className="market-container">
        <h2>Select a time slice to see all the stock prices!</h2>
        <div className="dateTime-container">
          <div className="startingDate-container">
            <label>Select a starting date</label>
            <input
              type="datetime-local"
              min={format(minDate, "yyyy-MM-dd'T'HH:mm")}
              max={format(maxDate, "yyyy-MM-dd'T'HH:mm")}
              onChange={handleChangeStart}
            />
          </div>
          <div className="endingDate-container">
            <label>Selected an ending date.</label>
            <input
              type="datetime-local"
              min={format(minDate, "yyyy-MM-dd'T'HH:mm")}
              max={format(maxDate, "yyyy-MM-dd'T'HH:mm")}
              onChange={handleChangeEnd}
            />
          </div>
        </div>
        <div className="button">
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}
