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
import DeliverySuccess from './components/Pages/DeliverySuccess';



function App() {

  return (
    <div className="App">
    <AuctionProvider>  
    <header className="App-header">

    </header>

      <div className="content">
        <Routes>
          
         
          <Route path='/' element={<Home />} />
          <Route path='/delivery/:id' element={<DeliveryForm />} />
          <Route path='/loginForm' element={<LoginForm />} />
          <Route path='/destination' element={<DeliveryOptions/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/newAuction' element={<NewAuction />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signUpForm' element={<SignUpForm />} />
          <Route path='/auctionList' element={<AuctionList />} />
          <Route path='/auction/:id' element={<SingleAuction/>} />
          <Route path='/deliverysuccess' element={<DeliverySuccess/>}/>
        </Routes>
      </div>
      </AuctionProvider> 

      
    </div>
  );
}


export default App;



