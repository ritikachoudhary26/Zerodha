import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import {Link} from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import ProductPage from './landing_page/products/ProductsPage';
import NotFound from "./landing_page/NotFound";
import  Login  from "./pages/Login";
import  Signup  from "./pages/Signup";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path ="/login" element={<Login/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
<Footer/>
</BrowserRouter>
);

