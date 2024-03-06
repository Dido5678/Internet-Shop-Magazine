import React from 'react';
import BasketList from '../../products/BasketList';



const Cart: React.FC = () => {
 
   

  
  return (
    <div>
     <BasketList />
    </div>
  );
};

export default Cart;



























// import React, { useState, useEffect
// } from 'react';
// import { useParams } from 'react-router-dom';
// import productsData from "../data/products.json";

// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   description: string;
//   // Add other properties as needed
// }

// const Cart: React.FC = () => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isWindowOpen, setIsWindowOpen] = useState(false);
//   const { productId } = useParams<{ productId: string }>();

//   // Fetch the selected product based on productId
//   useEffect(() => {
//     const product = productsData.find(product => product.id === productId);
//     if (product) {
//       setSelectedProduct(product);
//       setIsWindowOpen(true);
//     }
//   }, [productId]);

//   return (
//     <div>
//       {isWindowOpen && selectedProduct && (
//         <div className="product-window">
//           <h1>{selectedProduct.name}</h1>
//           <div>
//             <img src={selectedProduct.image} alt={selectedProduct.name} className="product-img" />
//           </div>
//           <div className="product-box">
//             <div className="product-title">{selectedProduct.name}</div>
//             <div className="product-desc">{selectedProduct.description}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;























// import React, { useState, ChangeEvent } from 'react';
// import styles from "../pages/home.module.scss"; 
// import { Link } from "react-router-dom";


// interface  CartProps {selectedProduct: any;
//   isWindowOpen: boolean;
//   setIsWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Cart: React.FC< CartProps> = (selectedProduct, isWindowOpen, setIsWindowOpen) => {
//   const [count, setCount] = useState(1);
//   const [originalPrice] = useState(120.99);
//   const [discountedPrice] = useState(130);
  


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
//               <Link to="/cart/2.4" >View Full Product Details</Link>
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
          
//           </div>
//           <div onClick={handleCloseWindow}>
//             <img src="./icons/close.png" alt="close" className={styles.product_close}/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// export default Cart;
