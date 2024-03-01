// Home.tsx
import React from 'react';
import Layout from "./Layout";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from '../components/SectionThree';
import SectionBasket from '../components/SectionBasket';
import SectionFour from '../components/SectionFour';
// import SectionReviewsSlider from "../components/SectionReviewsSlider";


interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
 

 

  return (
    <>
       <Layout />
       <SectionOne />
       <SectionTwo />
       <SectionThree />
       <SectionBasket />
       <SectionFour />
       {/* <SectionReviewsSlider /> */}
    </>
  );
};

export default Home;
















