import React, { useState, useEffect } from 'react';
import { emitter } from '../../emitter'; 

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const handleAddToCart = (product: any) => {
      setCartItems(prevItems => [...prevItems, product]);
    };

    // Listen for the addToCart event
    emitter.on('addToCart', handleAddToCart);

    // Clean up the listener when component unmounts
    return () => {
      emitter.removeListener('addToCart', handleAddToCart);
    };
  }, []);

  return (
    <>
      <h1>Basket</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;






