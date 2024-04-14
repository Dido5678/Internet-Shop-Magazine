import React, { useState, useEffect } from 'react';
import styles from "../../pages/home.module.scss";
import productsData from "../../data/shopProducts.json";


interface  ShopProps {
}

const Shop: React.FunctionComponent< ShopProps> = () => {
  const [category, setCategory] = useState('all');
  
  const [showItems, setShowItems] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  

  const filteredProducts = category === 'all' ? productsData : productsData.filter((product: any) => product.category === category);

  const handleOpenToBasket = (product: any) => {
    setSelectedProduct(product);
    setIsWindowOpen(true);
  }

  const handleAddToBasket = (product: any) => {
    const currentBasketItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
    const newBasketItems = [...currentBasketItems, product];
    localStorage.setItem('basketItems', JSON.stringify(newBasketItems));
     setCartItems(newBasketItems);
    
  };
  


  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(`.${styles.basket_container}`);
      if (container) {
        const bounding = container.getBoundingClientRect();
        setShowItems(bounding.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.section_basket}>
    <div className={styles.basket_container}>
      <h2 className={styles.new_arrivals}>SHOP</h2>
      <div className={`${styles.list_block} ${showItems ? styles.show : ''}`}>
        {filteredProducts.map((product: any) => (
          
            <div key={product.id} className={styles.list_items}>
              <div className={styles.list_img_container} onClick={() => handleOpenToBasket(product)}>
                <img src={product.image} alt={product.name} className={styles.list_img} />
              </div>
              <div className={styles.list_price}>{product.price}</div>
              <div className={styles.list_text}>{product.text}</div>
              <div className={styles.list_basket} onClick={() => handleAddToBasket(product)}>Add to Basket</div>
            </div>
        ))}
      </div>
    </div>
    </div>
  );
};



export default Shop;
