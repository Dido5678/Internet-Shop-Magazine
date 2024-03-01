import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import { Carousel } from 'react-bootstrap'; 
import styles from "../pages/home.module.scss";

interface SectionTwoProps {}

const SectionTwo: React.FC<SectionTwoProps> = () => {
  
    return (
        <div>
            <Carousel>
                <Carousel.Item className={styles.carouselItem}>
                    <img src="./images/bg.jpg" alt="bg" className={styles.image}/>
                    <div className={styles.overlay}>
                        <p className={styles.text}>*Only today we offer free shipping</p>
                        <h1 className={styles.title}>FASHION TRENDS</h1>
                        <button className={styles.button}>SHOP NOW</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                    <img src="./images/woman.png" alt="bg" className={styles.image}/>
                    <div className={styles.overlay}>
                        <p className={styles.text}>*Only today we offer free shipping</p>
                        <h1 className={styles.title}>SUMMER COLLECTION</h1>
                        <button className={styles.button}>CHECK COLLECTION</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                    <img src="./images/woman-fash.jpeg" alt="bg" className={styles.image}/>
                    <div className={styles.overlay}>
                        <p className={styles.text}>*Only today we offer free shipping</p>
                        <h1 className={styles.title}>WOMEN FASHION</h1>
                        <button className={styles.button}>CHECK COLLECTION</button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SectionTwo;













