import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { AuctionProvider } from './context/AuctionContext';
import Profile from './components/Profile';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import NewAuction from './components/NewAuction';
function App() {
  return (
    <div className="App">
    <AuctionProvider>  
      <header className="App-header">

      </header>

      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/LoginForm' element={<LoginForm />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/new-auction' element={<NewAuction />} />
        </Routes>
      </div>
      </AuctionProvider>  
    </div>
  );
}

export default App;
