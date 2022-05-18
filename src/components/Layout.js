import React from 'react';
import Header from './Pages/Header';
import { useLocation } from 'react-router';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
  
    return (
      <div>
        {pathname !== "/" ? <Header /> : null}
        <div>{children}</div>
      </div>
    );
  };

export default Layout;