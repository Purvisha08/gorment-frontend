import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './js/Description';
import AppointmentForm from './js/AppointmentForm';
import HomeScreen from "./js/Display_Menu/screens/HomeScreen";
import ProductScreen from "./js/Display_Menu/screens/ProductScreen";
import CartScreen from "./js/Display_Menu/screens/CartScreen";

import Navbar from './js/Display_Menu/components/Navbar';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/menuItems/:id" element={<ProductScreen /> } />
        <Route path="/cart" element={<CartScreen /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
