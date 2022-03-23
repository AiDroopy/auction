import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { AuctionProvider } from './context/AuctionContext';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
    <AuctionProvider>  
      <header className="App-header">

      </header>

      <div className="content">
        <Routes>
          <Route exact path='/' element={<Profile />} />
        </Routes>
      </div>
      </AuctionProvider>  
    </div>
  );
}

export default App;
