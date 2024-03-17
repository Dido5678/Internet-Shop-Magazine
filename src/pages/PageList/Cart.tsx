import React, { useState, useEffect } from 'react';


interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const handleAddToCart = (product: any) => {
      setCartItems(prevItems => [...prevItems, product]);
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






