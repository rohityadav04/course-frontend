import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const OutletHeader = () => {
  return (
    <>
      <div className="menu">
        <div className="menubar">
          <Header />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default OutletHeader;
