import { Route, Routes } from 'react-router';
import Home from './components/Pages/Home';
import { AuctionProvider } from './context/AuctionContext';
import Profile from './components/Pages/Profile';
import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import NewAuction from './components/NewAuction';
import AuctionList from './components/AuctionList';
import Search from './components/Pages/Search';
import React from 'react';
import SingleAuction from './components/Pages/SingleAuction';
import DeliveryOptions from './components/Pages/DeliveryOptions';
import DeliveryForm from "./components/DeliveryForm";



function App() {

  return (
    <div className="App">
    <AuctionProvider>  
    <header className="App-header">

    </header>

      <div className="content">
        <Routes>
          
         

          <Route path='/' element={<Home />} />

          <Route path='/DeliveryForm' element={<DeliveryForm />} />
          
          <Route path='/LoginForm' element={<LoginForm />} />
          <Route path='/Destination' element={<DeliveryOptions/>} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/NewAuction' element={<NewAuction />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/SignUpForm' element={<SignUpForm />} />
          <Route path='/AuctionList' element={<AuctionList />} />
        </Routes>
      </div>
      </AuctionProvider> 

      
    </div>
  );
}


export default App;



