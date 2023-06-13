# Stock App

## Live Demo - 

## Details

#### Front-end
The front-end is build with `Vite` and `React` in TypeScript.
The application allows users to search and explore the Stock Market. It provides various features to help users analyze stock prices and make informed decisions.

When using the application, users can specify a time slice period to search within. The application will retrieve and display all the stock prices available within that specific time period. Additionally, it offers insights on the best time and price to buy stocks, as well as the best time and price to sell stocks.

Furthermore, the application includes an input field where users can enter their available funds. Based on this input, the app calculates and presents the potential buy and sell dates, the number of stocks that could be bought, the purchase and selling prices, and the estimated profit.

#### Back-end
The back-end is build with `Nest.js`. 
The data in the back-end is stored locally in memory. It has an algorithm that generates stock data within a specific time period of 3 days. The data is generated per second with different prices and timestamps. Whenever the client choses a time slice, a Get request is sent to the server with the specific time slice. An algorithm takes the parameters and sends back the data within the selected time slice. 
Additionally the back-end has an algorithm that selects the earliest and lowest price to buy along with the best price to sell.


Used libraries: 

- Server `date-fns` `react-scroll`
- Client `date-fns, recharts`

### Usage

`Clone repo`

- Server `cd server` `npm i` `npm run start:dev`
- Client `cd client` `npm i` `npm run dev`

### Feafures

- view stock prices
- select a time slice 
- best price to buy
- best price to sell
- bought stocks
- sold stocks
- profit
- validation

### Screenshots 

<img src="public/../client/public/127.0.0.1_5173_%20(2).png">
<img src="public/../client/public/127.0.0.1_5173_%20(1).png">