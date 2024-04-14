import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './assets/my.module.scss';
import Home from "./pages/Home";
import Shop from "./pages/PageList/Shop";
import ProductDetails from './pages/PageList/ProductDetails';
import Cart from './pages/PageList/Cart';
import Checkout from './pages/PageList/Checkout';
import Dresses from './pages/Dresses';
import Shoes from './pages/Shoes';
import Contact from './pages/Contact';


const App: React.FC = () => {
  console.log("Rendering App component");

  return (
    <div className={styles.main}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/shop/2.2" element={<Shop />} />
        <Route path="/productdetails/2.3" element={<ProductDetails/>} />
        <Route path="/cart/2.4" element={<Cart />} />
        <Route path="/checkout/2.5" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;