import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className='container'>
      <div className='inner-container'>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
