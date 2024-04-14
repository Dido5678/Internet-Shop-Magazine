import React, { useState, ChangeEvent } from 'react';
import styles from "../pages/home.module.scss"; 
import { Link } from "react-router-dom";
import { EventEmitter } from 'events';

interface InfoProductProps {
  selectedProduct: any;
  isWindowOpen: boolean;
  setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart?: (product: any) => void; 
}

export const emitter = new EventEmitter();

const InfoProduct: React.FC<InfoProductProps> = ({ selectedProduct, isWindowOpen, setIsWindowOpen }) => {
  const [count, setCount] = useState(1);
  const [originalPrice] = useState(39.99);
  const [discountedPrice] = useState(70);

  const handleAddToCart = () => {
    emitter.emit('addToCart', selectedProduct);
    // Add logic to add the selected product to the cart
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(event.target.value, 10) || 0); 
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  // Convert prices to strings
  const originalPriceStr = originalPrice.toString();
  const discountedPriceStr = discountedPrice.toString();

  return (
    <div>
      {isWindowOpen && selectedProduct && (
        <div className={styles.product_window}>
          <div>
            <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.product_img} />
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_title}>Boutique Silk Dress</div>
            <div className={styles.product_stars}>
            </div>
            <div className={styles.product_discount}>
              <p className={styles.original_price}>
                ${originalPriceStr.substring(0, originalPriceStr.length - 1)}
                <span >
                  {originalPriceStr.charAt(originalPriceStr.length - 1)}
                </span>
              </p>
              <p style={{ textDecoration: 'line-through' }} className={styles.discount}>
                ${discountedPriceStr}
              </p>
            </div>
            <div className={styles.product_desc}>{selectedProduct.description}</div>
            <div className={styles.product_details}>
              <Link to='/cart/2.4'>View Full Product Details</Link>
            </div>
            <div className={styles.count_content}>
              <button onClick={decrementCount} className={styles.product_minus}>-</button>
              <input type="number" value={count} onChange={handleChange} className={styles.input_count}/>
              <button onClick={incrementCount} className={styles.product_plus}>+</button>
              <button className={styles.add_cart}>Add to cart</button>
              <Link to="#">
                <img src="./icons/hearth.png" alt="hearth" className={styles.product_hearth}/>  
              </Link>
              <Link to="#">
                <img src="./icons/stats.png" alt="stats"className={styles.product_stats} />
              </Link>
            </div>
            <div className={styles.share}>Share With Friend</div>
            <div className={styles.product_socials}>
              {/* Social icons go here */}
            </div>
          </div>
          <div onClick={handleCloseWindow}>
            <img src="./icons/close.png" alt="close" className={styles.product_close}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProduct;























