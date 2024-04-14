import * as React from 'react';
import styles from "../pages/home.module.scss";


interface  SectionOneProps {
}

const SectionOne: React.FC< SectionOneProps> = () => {

  return (
    <div className={styles.section_one}>
    <div className={styles.list}>
        <div className={styles.item1}>
            <h3>Free Shipping & Returns</h3>
            <span className={styles.subText}>BUY NOW</span>
        </div>
        <div className={styles.item2}>
            <h3>20% Discount for all dresses</h3>
            <span className={styles.subText}>USE CODE: Colorlib</span>
        </div>
        <div className={styles.item3}>
            <h3>20% Discount for students</h3>
            <span className={styles.subText}>USE CODE: Colorlib</span>
        </div>
    </div>
    </div>
  );
};

export default SectionOne;
