# Stock App

## Live Demo - 

### Details

#### Front-end
The Stock App is a full stack application that allows users to search and explore the Stock Market. It provides various features to help users analyze stock prices and make informed decisions.

When using the application, users can specify a time slice period to search within. The application will retrieve and display all the stock prices available within that specific time period. Additionally, it offers insights on the best time and price to buy stocks, as well as the best time and price to sell stocks.

Furthermore, the application includes an input field where users can enter their available funds. Based on this input, the app calculates and presents the potential buy and sell dates, the number of stocks that could be bought, the purchase and selling prices, and the estimated profit.

#### Back-end
The back-end is build with `Nest.js`

Used libraries: 

- Server `date-fns`
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
- validation

