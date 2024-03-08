import React, { useState, ChangeEvent } from 'react';
import styles from "../pages/home.module.scss"; 
import { Link } from "react-router-dom";

interface InfoProductProps {
  selectedProduct: any;
  isWindowOpen: boolean;
  setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart?: (product: any) => void; // Make it optional
}

const InfoProduct: React.FC<InfoProductProps> = ({ selectedProduct, isWindowOpen, setIsWindowOpen }) => {
  const [count, setCount] = useState(1);
  const [originalPrice] = useState(39.99);
  const [discountedPrice] = useState(70);

  

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
























// // Basket.tsx
// import React, { useState, ChangeEvent } from 'react';
// import styles from "../pages/home.module.scss"; 
// import { Link } from "react-router-dom";




// interface BasketProps {
//   selectedProduct: any;
//   isWindowOpen: boolean;
//   setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Basket: React.FC<BasketProps> = ({ selectedProduct, isWindowOpen, setIsWindowOpen }) => {
//   const [count, setCount] = useState(1);
//   const [originalPrice] = useState(120.99);
//   const [discountedPrice] = useState(130);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [isWindowOpen, setIsWindowOpen] = useState(false);
  


//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setCount(parseInt(event.target.value, 10) || 0); 
//   };

//   const handleCloseWindow = () => {
//     setIsWindowOpen(false);
//   }

//   function incrementCount() {
//     setCount(prevCount => prevCount + 1);
//   }

//   function decrementCount() {
//     if (count > 0) {
//       setCount(prevCount => prevCount - 1);
//     }
//   }
//   const handleOpenToBasket = (product: any) => {
//     setSelectedProduct(product);
//     setIsWindowOpen(true);
//   }

//   // Convert prices to strings
//   const originalPriceStr = originalPrice.toString();
//   const discountedPriceStr = discountedPrice.toString();

//   return (
//     <div>
//       {isWindowOpen && selectedProduct && (
//         <div className={styles.product_window}>
//           <div>
//             <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.product_img} />
//           </div>
//           <div className={styles.product_box}>
//             <div className={styles.product_title}>Boutique Silk Dress</div>
//             <div className={styles.product_stars}>
//               <img src='icons/star.png' alt="star" className={styles.product_star}/>
//               <img src='icons/star.png' alt="star"className={styles.product_star}/>
//               <img src='icons/star.png' alt="star"className={styles.product_star}/>
//               <img src='icons/star.png' alt="star"className={styles.product_star}/>
//               <img src='icons/star.png' alt="star"className={styles.product_star}/>
//             </div>
//               <div className={styles.product_discount}>
//                 <p className={styles.original_price}>
//                   ${originalPriceStr.substring(0, originalPriceStr.length - 1)}
//                   <span >
//                     {originalPriceStr.charAt(originalPriceStr.length - 1)}
//                   </span>
//                 </p>
//                 <p style={{ textDecoration: 'line-through' }} className={styles.discount}>
//                   ${discountedPrice}
//                 </p>
//               </div>
//             <div className={styles.product_desc}>{selectedProduct.description}</div>
//             <div className={styles.product_details}>
//               <Link to="/cart/2.4" onClick={() => handleOpenToBasket(product)} selectedProduct={selectedProduct} isWindowOpen={isWindowOpen} setIsWindowOpen={setIsWindowOpen}>View Full Product Details</Link>
//              </div>
//             <div className={styles.count_content}>
//                 <button onClick={decrementCount} className={styles.product_minus}>-</button>
//                 <input type="number" value={count} onChange={handleChange} className={styles.input_count}/>
//                 <button onClick={incrementCount} className={styles.product_plus}>+</button>
//                 <button className={styles.add_cart}>Add to cart</button>
//                 <Link to="#">
//                   <img src="./icons/hearth.png" alt="hearth" className={styles.product_hearth}/>  
//                 </Link>
//                 <Link to="#">
//                   <img src="./icons/stats.png" alt="stats"className={styles.product_stats} />
//                 </Link>
//             </div>
//             <div className={styles.share}>Share With Friend</div>
//             <div className={styles.product_socials}>
//               <Link to="https://www.facebook.com">
//                 <img src="./icons/facebook.png" alt="facebook" />
//               </Link>
//               <Link to="https://www.twitter.com">
//                 <img src="./icons/twitter.png" alt="twitter" />
//               </Link>
//               <Link to="https://www.pinterest.com/">
//                 <img src="./icons/pinterest.png" alt="pinterest" />
//               </Link>
//               <Link to="https://www.google.com/">
//                 <img src="./icons/google.png" alt="google" />
//               </Link>
//             </div>
//           </div>
//           <div onClick={handleCloseWindow}>
//             <img src="./icons/close.png" alt="close" className={styles.product_close}/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Basket;














// import * as React from 'react';
// import { Link } from "react-router-dom";




// interface  BasketProps {
// }

// const Basket: React.FC< BasketProps> = () => {
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [isWindowOpen, setIsWindowOpen] = useState(false);
//   const [count, setCount] = useState(0);




//   const handleCloseWindow = () => {
//     setIsWindowOpen(false);
//   }



//   function incrementCount() {
//     count = count + 1;
//     setCount(count);
//   }
//   function decrementCount() {
//     count = count - 1;
//     setCount(count);
//   }

//   return (
//     <div>
//     {/* Small window for displaying product details */}
//     {isWindowOpen && selectedProduct && (
//         <div className={styles.product_window}>
//           <div>
//             <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.product_img}/>
//           </div>
//           <div>
//             <div>Boutique Silk Dress</div>
//             <div>{selectedProduct.price}</div>
//             <div>{selectedProduct.description}</div>
//             <div><Link to="/basket" >View Full Product Details</Link></div>
            
//               <button onClick={incrementCount}>+</button>
//               <div>{count}</div>
//               <button onClick={decrementCount}>-</button>
//             </div>
//           </div>
          
//           <button onClick={handleCloseWindow}>Close</button>
//         </div>
//       )}
//     </div>
//   )
// };

// export default Basket;
