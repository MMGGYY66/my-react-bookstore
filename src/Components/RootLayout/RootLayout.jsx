import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default RootLayout;
