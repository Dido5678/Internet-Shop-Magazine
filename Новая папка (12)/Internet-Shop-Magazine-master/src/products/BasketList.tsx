// // BasketList.tsx

// import React, { useEffect, useState } from 'react';
// import styles from "../pages/basket.module.scss";

// interface BasketListProps {
 
// }



// const BasketList: React.FC<BasketListProps> = () => {
  

//   return (
//     <div>
//       <h2 className={styles.basket_title}>Basket</h2>
     
//     </div>
//   );
// };

// export default BasketList;
















// import React, { useEffect, useState } from 'react';
// import '../pages/basket.module.scss';
// import styles from "../pages/home.module.scss";


// interface BasketListProps {
//   basketItems: Product[];
  
// }

// interface Product {
//   id: string;
//   category: string;
//   name: string;
//   image: string;
//   price: string;
//   text: string;
//   basket: string;
// }


// const BasketList: React.FC<BasketListProps> = ({ basketItems }) => {
//   const [basketItems, setBasketItems] = useState<Product[]>([]);

//   useEffect(() => {
//     const savedBasketItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
//     setBasketItems(savedBasketItems);
//   }, []);


//   return (
//     <div>
//       <h2>Basket</h2>
//       <ul>
//         {basketItems.map((item, index) => (
//           <li key={index} className={styles.list_items}>
//             <img src={item.image} alt={item.name} className={styles.list_img} />
//             <div className={styles.list_price}>{item.price}</div>
//             <div className={styles.list_text}>{item.text}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BasketList;














// interface BasketListProps {
//   basketItems: Product[];
// }

// interface Product {
//   id: string;
//   category: string;
//   name: string;
//   image: string;
//   price: string;
//   text: string;
//   basket: string;
// }

// const BasketList: React.FC<BasketListProps> = ({ basketItems }) => {
//   return (
//     <div className={styles.basket_list}>
//       <h2 className={styles.basket_title}>Basket</h2>
//       <ul className={styles.basket_items}>
//         {basketItems.map((product: Product) => (
//           <li key={product.id} className={styles.basket_item}>
//             <img src={product.image} alt={product.name} className={styles.basket_img} />
//             <div className={styles.basket_details}>
//               <div className={styles.basket_name}>{product.name}</div>
//               <div className={styles.basket_price}>{product.price}</div>
//               <div className={styles.basket_text}>{product.text}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BasketList;