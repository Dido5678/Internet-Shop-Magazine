import React, { useState, useEffect } from 'react';
import styles from "../pages/home.module.scss";
import productsData from "../data/products.json";
import Basket from "../pages/Basket";

interface SectionBasketProps {}

const SectionBasket: React.FC<SectionBasketProps> = () => {
  const [category, setCategory] = useState('all');
  const [colorChange, setChangeColor] = useState("grey");
  const [showItems, setShowItems] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setChangeColor(selectedCategory === category ? "black" : "grey");
  };

  const filteredProducts = category === 'all' ? productsData : productsData.filter((product: any) => product.category === category);

  const handleOpenToBasket = (product: any) => {
    setSelectedProduct(product);
    setIsWindowOpen(true);
  }

  const handleAddToBasket = (product: any) => {
    const currentBasketItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
    localStorage.setItem('basketItems', JSON.stringify([...currentBasketItems, product]));
    console.log(product);
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
      <h2 className={styles.new_arrivals}>NEW ARRIVALS</h2>
      <div className={styles.content}>
        <p onClick={() => handleCategoryChange('all')} style={{ color: colorChange }}>ALL</p>
        <p onClick={() => handleCategoryChange('woman')} style={{ color: colorChange }}>WOMAN</p>
        <p onClick={() => handleCategoryChange('man')} style={{ color: colorChange }}>MAN</p>
        <p onClick={() => handleCategoryChange('accessories')} style={{ color: colorChange }}>ACCESSORIES</p>
        <p onClick={() => handleCategoryChange('shoes')} style={{ color: colorChange }}>SHOES</p>
        <p onClick={() => handleCategoryChange('kids')} style={{ color: colorChange }}>KIDS</p>
      </div>
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
      <Basket selectedProduct={selectedProduct} isWindowOpen={isWindowOpen} setIsWindowOpen={setIsWindowOpen} />
          
    </div>
    </div>
  );
};

export default SectionBasket;






















// import React, { useState } from 'react';
// import styles from "../pages/home.module.scss";
// import productsData from "../data/products.json";
// import Basket from "../pages/Basket";

// interface SectionBasketProps {}

// const SectionBasket: React.FC<SectionBasketProps> = () => {
//   const [category, setCategory] = useState('all');
//   const [colorChange, setChangeColor] = useState("grey");
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [isWindowOpen, setIsWindowOpen] = useState(false);

//   const handleCategoryChange = (selectedCategory: string) => {
//     setCategory(selectedCategory);
//     setChangeColor(selectedCategory === category ? "black" : "grey");
//   };

//   const filteredProducts = category === 'all' ? productsData : productsData.filter((product: any) => product.category === category);

//   const handleOpenToBasket = (product: any) => {
//     setSelectedProduct(product);
//     setIsWindowOpen(true);
//   }

//   const handleAddToBasket = (product: any) => {
//     const currentBasketItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
//     localStorage.setItem('basketItems', JSON.stringify([...currentBasketItems, product]));
//     console.log(product);
//   };

//   return (
//     <div className={styles.basket_container}>
//       <h2 className={styles.new_arrivals}>NEW ARRIVALS</h2>
//       <div className={styles.content}>
//         <p onClick={() => handleCategoryChange('all')} style={{ color: colorChange }}>ALL</p>
//         <p onClick={() => handleCategoryChange('woman')} style={{ color: colorChange }}>WOMAN</p>
//         <p onClick={() => handleCategoryChange('man')} style={{ color: colorChange }}>MAN</p>
//         <p onClick={() => handleCategoryChange('accessories')} style={{ color: colorChange }}>ACCESSORIES</p>
//         <p onClick={() => handleCategoryChange('shoes')} style={{ color: colorChange }}>SHOES</p>
//         <p onClick={() => handleCategoryChange('kids')} style={{ color: colorChange }}>KIDS</p>
//       </div>
//       <div className={styles.list_block}>
//         {filteredProducts.map((product: any) => (
//           <div key={product.id} className={styles.list_items}>
//             <div className={styles.list_img_container} onClick={() => handleOpenToBasket(product)}>
//               <img src={product.image} alt={product.name} className={styles.list_img} />
//             </div>
//             <div className={styles.list_price}>{product.price}</div>
//             <div className={styles.list_text}>{product.text}</div>
//             <div className={styles.list_basket} onClick={() => handleAddToBasket(product)}>Add to Basket</div>
//           </div>
//         ))}
//       </div>
//       <Basket selectedProduct={selectedProduct} isWindowOpen={isWindowOpen} setIsWindowOpen={setIsWindowOpen} />
//     </div>
//   );
// };

// export default SectionBasket;


























