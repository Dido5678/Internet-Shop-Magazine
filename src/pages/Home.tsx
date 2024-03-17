import React, { useState, useEffect } from 'react';
import styles from '../assets/my.module.scss';
import Layout from './Layout/Header';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionBasket from '../components/SectionBasket';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';
import Footer from './Layout/Footer';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    console.log('Handling scroll...');
    const secondSectionOffset = document.getElementById('section-two')?.offsetTop || 0;
    console.log('Second section offset:', secondSectionOffset);
    if (window.pageYOffset > secondSectionOffset) {
      console.log('Showing scroll button...');
      setShowScrollButton(true);
    } else {
      console.log('Hiding scroll button...');
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    console.log('Scrolling to top...');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    console.log('Adding scroll event listener...');
    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('Removing scroll event listener...');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <Layout />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionBasket />
      <SectionFour />
      <SectionFive />
      <Footer />

      {/* Render the scroll button conditionally */}
      {showScrollButton && (
        <div className={styles.home_scroll}>
          <div onClick={scrollToTop}>
            <img src='./icons/chevron.png' alt='up' className={styles.scroll_up} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;




















// // Home.tsx
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import styles from '../assets/my.module.scss';
// import Layout from "./Layout/Header";
// import SectionOne from "../components/SectionOne";
// import SectionTwo from "../components/SectionTwo";
// import SectionThree from '../components/SectionThree';
// import SectionBasket from '../components/SectionBasket';
// import SectionFour from '../components/SectionFour';
// import SectionFive from "../components/SectionFive";
// import Footer from "./Layout/Footer";

// interface HomeProps {}

// const Home: React.FC<HomeProps> = () => {
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   const handleScroll = () => {
//     if (window.pageYOffset > 300) {
//       setShowScrollButton(true);
//     } else {
//       setShowScrollButton(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Add event listener to handle scroll
//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="home-container">
//        <Layout />
//        <SectionOne />
//        <SectionTwo />
//        <SectionThree />
//        <SectionBasket />
//        <SectionFour />
//        <SectionFive />
//        <Footer />
//        {/* Render the scroll button conditionally */}
//        {showScrollButton && (
//          <div className={styles.home_scroll}>
//            <button onClick={scrollToTop}>
//              <img src='./icons/chevron-up.png' alt='up' className={styles.scroll_up}/>
//            </button>
//          </div>
//        )}
//     </div>
//   );
// };

// export default Home;






















// // Home.tsx
// import React from 'react';
// import { Link } from "react-router-dom";
// import styles from '../assets/my.module.scss';
// import Layout from "./Layout/Header";
// import SectionOne from "../components/SectionOne";
// import SectionTwo from "../components/SectionTwo";
// import SectionThree from '../components/SectionThree';
// import SectionBasket from '../components/SectionBasket';
// import SectionFour from '../components/SectionFour';
// import SectionFive from "../components/SectionFive";
// import Footer from "./Layout/Footer";


// interface HomeProps {

// }

// const Home: React.FC<HomeProps> = () => {
 

 

//   return (
//     <div className="home-container">
//        <Layout />
//        <SectionOne />
//        <SectionTwo />
//        <SectionThree />
//        <SectionBasket />
//        <SectionFour />
//        <SectionFive />
//        <Footer />
//        <div className={styles.home_scroll}>
//         <Link to="top" >
//           <img src='./icons/chevron-up.png' alt='up' className={styles.scroll_up}/>
//         </Link>
//        </div>
//     </div>
//   );
// };

// export default Home;
















