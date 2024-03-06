import React, { useState } from 'react';
import styles from "../pages/home.module.scss";

interface   SectionFourProps {
}

const   SectionFour: React.FC< SectionFourProps> = () => {
  const [originalPrice] = useState(15.99);
  const [discountedPrice] = useState(25.99);


  // Convert prices to strings
  const originalPriceStr = originalPrice.toString();
  const discountedPriceStr = discountedPrice.toString();


  return (
    <div className={styles.section_four}>
    <div className={styles.four_container}>
      <div className={styles.four_box}>
      <div className={styles.cont}>
        <span className={styles.hot_offer}>HOT</span>
        <h2 className={styles.four_title}>WHITE T-SHIRT</h2>
      </div>
        <p className={styles.four_text}>* Free shipping until 25 Dec 2017</p>
        <div className={styles.four_discount}> 
              <p style={{ textDecoration: 'line-through' }} className={styles.four_disc}>
                ${discountedPrice}
              </p>
              <p className={styles.original_price}>
                ${originalPriceStr.substring(0, originalPriceStr.length - 1)}
                <span >
                  {originalPriceStr.charAt(originalPriceStr.length - 1)}
                </span>
              </p>
            </div>
            <button className={styles.four_shop}>SHOP NOW</button>
      </div>
    </div>
    </div>
  )
};

export default  SectionFour;
