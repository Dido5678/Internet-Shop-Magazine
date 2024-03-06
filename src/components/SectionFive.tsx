import React from 'react';
import styles from "../pages/home.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import { Carousel } from 'react-bootstrap'; 





const SectionReviewsSlider: React.FC = () => {
  return (
    <div className={styles.section_five}>
      <h2 className={styles.five_title}>TESTIMONIALS</h2>
        <Carousel>
                <Carousel.Item className={styles.carousel_item}>
                  <img src="./icons/quote.png" alt="quote"/>
                  <p className={styles.corusel_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione facere enim consectetur reprehenderit quas? Officiis illo eum ratione, id, rem, dolor et dolores debitis mollitia ex placeat aliquid non? dolor et dolores debitis mollitia ex placeat aliquid non?</p>
                  <div className={styles.corusel_box}>
                    <img src="./images/tes.jpg" alt="avatar" className={styles.avatar}/>
                    <div>
                    <p className={styles.avatar_text}>Michelle Williams</p>
                    <span className={styles.city}>Client, Los Angeles</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_item}>
                    <img src="./icons/quote.png" alt="quote"/>
                    <p className={styles.corusel_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione facere enim consectetur reprehenderit quas? Officiis illo eum ratione, id, rem, dolor et dolores debitis mollitia ex placeat aliquid non? dolor et dolores debitis mollitia ex placeat aliquid non?</p>
                    <div className={styles.corusel_box}>
                    <img src="./images/tes.jpg" alt="avatar" className={styles.avatar}/>
                    <div>
                    <p className={styles.avatar_text}>Michelle Williams</p>
                    <span className={styles.city}>Client, Los Angeles</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_item}>
                  <img src="./icons/quote.png" alt="quote"/>
                  <p className={styles.corusel_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione facere enim consectetur reprehenderit quas? Officiis illo eum ratione, id, rem, dolor et dolores debitis mollitia ex placeat aliquid non? dolor et dolores debitis mollitia ex placeat aliquid non?</p>
                  <div className={styles.corusel_box}>
                    <img src="./images/tes.jpg" alt="avatar" className={styles.avatar}/>
                    <div>
                    <p className={styles.avatar_text}>Michelle Williams</p>
                    <span className={styles.city}>Client, Los Angeles</span>
                    </div>
                  </div>
                </Carousel.Item>
            </Carousel>
      
    </div>
  );
};

export default SectionReviewsSlider;














// import * as React from 'react';
// import styles from "../pages/home.module.scss";

// interface  ReviewsProps {
// }

// const Reviews: React.FunctionComponent< ReviewsProps> = (props) => {
//   return (
//     <div className={styles.reviews_container}>
//         <h2 className={styles.reviews_title}>TESTIMONIALS</h2>

//     </div>
//   )
// };

// export default Reviews;
