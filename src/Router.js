import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';
import AddProductInfoPage from './pages/AddProductInfo/AddProductInfoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <SideNav />
      <Routes>
        <Route path="/" element={<AddProductInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
