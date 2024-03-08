import * as React from 'react';
import styles from "../pages/home.module.scss";


interface SectionThreeProps {
}

const SectionThree: React.FC<SectionThreeProps> = () => {
    return (
        <div className={styles.section_three}>
            <div className={styles.list_box}>
                <div className={styles.box_1}>
                    <img src='./images/ochki.jpg' alt='bg' className={styles.images_2} />
                    <div className={styles.overlay_2}>
                        <p className={styles.sub_title}>ON ACCESORIES</p>
                        <span className={styles.sale}>SALE <br></br> 30%</span>
                        <button className={styles.button_2}>SHOP NOW</button>
                    </div>
                </div>
                <div className={styles.box_2}>
                    <img src='./images/bagwoman.jpeg' alt='bg' className={styles.images_2} />
                    <div className={styles.overlay_2}>
                        <p className={styles.sub_title}>IN BAGS EXCEPTING THE NEW <br></br> COLLECTION</p>
                        <span className={styles.sale}>DESIGNER BAGS</span>
                        <button className={styles.button_2}>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
