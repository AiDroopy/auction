import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { AuctionProvider } from './context/AuctionContext';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import NewAuction from './components/NewAuction';
import AuctionList from './components/AuctionList';

import SignUpForm from './components/SignUpForm';
import Bid from './components/Bid';
import BidsService from './services/BidsService';

import Search from './components/Search';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


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
          <Route path='/Profile' element={<Profile />} />
          <Route path='/NewAuction' element={<NewAuction />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/SignUpForm' element={<SignUpForm />} />
          <Route path='/AuctionList' element={<AuctionList />} />
          <Route path='/Bid' element={<Bid />} />
          <Route path='/Bidsservice' element={<BidsService />} />
          
          

        </Routes>
      </div>
      </AuctionProvider>  

      
    </div>
  );
}


export default App;



