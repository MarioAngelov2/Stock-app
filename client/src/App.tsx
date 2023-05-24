import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home price={20} />
    </div>
  );
}

export default App;
