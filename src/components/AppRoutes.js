
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Orders from "../pages/orders";

import React from 'react'
import {  Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
  <Routes>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/inventory' element={<Inventory />}></Route>
    <Route path='/orders' element={<Orders />}></Route> 
    <Route path='/customers' element={<Customers />}></Route>
  
  </Routes>
  );
} 

export default AppRoutes;