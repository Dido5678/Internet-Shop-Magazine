import React, { useState, useEffect, useMemo } from 'react';
import styles from '../../assets/my.module.scss';
import MenuList from '../../components/MenuList'; 
import MyNavbar from "../../components/MyNavbar";



interface  HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false); 
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  


  
  // Toggle menu visibility when the burger icon is clicked
  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  // Toggle cart visibility when the cart icon is clicked
  const toggleOpen = () => {
    setCartOpen(!isCartOpen);
  };

  const toggleClose = () => {
    setCartOpen(false);
  };

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
    setCartItems(storedItems);
  }, []);

  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace('$', ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  // Handle deleting items from the cart
  const handleDeleteItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('basketItems', JSON.stringify(newCartItems));
  };

  const totalPrice = useMemo(() => calculateTotalPrice(), [cartItems]);


  return (
    <div className={styles.section_header}> 
      <div className={styles.burger_container}>
        {isBurgerOpen && <MenuList isMenuClose={isBurgerOpen} toggleMenu={toggleBurger} />}
        <h1 className={styles.title}>K A R L <br /><span className={styles.fashion}>FASHION</span></h1>
        {/* my open basket */}
        <div className={styles.icons_box}>
          <img 
            className={styles.bag} 
            src="./icons/shopping-bag.png" 
            alt="bag" 
            onClick={toggleOpen} 
          />
          <p className={styles.bag_text}>Your Bag ${calculateTotalPrice()}</p>
          <img className={styles.burger} src="./icons/burger2.png" alt="burger" onClick={toggleBurger} />
          <div className={`${styles.cart} ${isCartOpen ? styles.active : ''}`}>
            <h2 className={styles.cart_title}>Your Adds</h2>
            <div className={styles.cart_content}>
              {cartItems && cartItems.map((item: any, index: number) => (
                <div key={index} className={styles.cart_block}>
                  <div>
                    <img src={item.image} alt={item.name} className={styles.cart_img}/>
                  </div>
                  <div>
                    <span>{item.text}</span><br/>
                    <span>{item.price}</span><br/>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value);
                        // console.log("New quantity:", newQuantity); 
                        const newCartItems = cartItems.map((cartItem, idx) => {
                          if (idx === index) {
                            return { ...cartItem, quantity: newQuantity };
                          }
                          return cartItem;
                        });
                        // console.log("New cart items:", newCartItems);
                        setCartItems(newCartItems);
                        localStorage.setItem('basketItems', JSON.stringify(newCartItems));
                      }}
                      className={styles.cart_quantity}
                      defaultValue={1} 
                    />
                  </div>
                  <div className={styles.cart_delete} onClick={() => handleDeleteItem(index)}>
                    <img src="icons/delete.png" alt="delete" className={styles.delete}/>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <div className={styles.total_title}>Total</div>
              <div className={styles.total_price}>${totalPrice}</div>
            </div>
            <button type="button" className={styles.btn_buy}>Add list</button>
            <img id="close_cart" onClick={toggleClose} className={styles.close_cart} src="./icons/close-basket.png" alt="cart-close" width="20" height="20" />
          </div>
        </div>
      </div>
      <MyNavbar />
    </div>
  );
};


export default Header;


