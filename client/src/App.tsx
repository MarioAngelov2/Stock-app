import "./App.css";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { StockMarket } from "./components/StockMarket";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <StockMarket />
      <Footer />
    </div>
  );
}

export default App;
