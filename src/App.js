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




function App() {

  return (
    <div className="App">
    <AuctionProvider>  
    <header className="App-header">

    </header>

      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginform' element={<LoginForm />} />
          <Route path='/destination' element={<DeliveryOptions/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/newauction' element={<NewAuction />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signupform' element={<SignUpForm />} />
          <Route path='/auctionlist' element={<AuctionList />} />
          <Route path='/auction/:id' element={<SingleAuction/>}/>
        </Routes>
      </div>
      </AuctionProvider> 

      
    </div>
  );
}


export default App;



