import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { AuctionProvider } from './context/AuctionContext';
import Profile from './components/Profile';
import Login from './components/Login';
import Card from './components/Card';
import img from './nedladdning(1).png'

function App() {
  return (
    <div className="App">
    {/* <AuctionProvider>  
      <header className="App-header">

      </header>

      <div className="content">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
      </AuctionProvider>   */}

      <Card 
      image = {img}/>
      
    </div>
  );
}

export default App;
