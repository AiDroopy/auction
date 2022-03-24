import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import { AuctionProvider } from "./context/AuctionContext";
import Auction from "./components/Auction";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <AuctionProvider>
        <header className="App-header"></header>

        <div className="content">
          <Routes>
            
            <Route exact path="/" element={<Auction />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </AuctionProvider>
    </div>
  );
}

export default App;
