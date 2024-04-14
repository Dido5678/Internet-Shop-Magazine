import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from './layout.module.scss';
import { Link } from "react-router-dom";



interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
   const [email, setEmail] = useState('');
   const [error, setError] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      setError('');
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      // Validate email
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        setError('Please enter a valid email address.');
        return;
      }
  
      // Save email to local storage
      localStorage.setItem('email', email);
      setEmail(''); // Clear the email input after submission
      setError('');
    };
  
    // Email validation function
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };


  return (
    <footer className={styles.footer}>
            <div className={styles.footer_container}>
            <div className={styles.footer_block}>
                  <div className={styles.footer_column}>
                     <img src="/images/logofooter.png" alt="logo" />
                     <p className={styles.footer_copyright}>
                        Copyright ©2024 All rights reserved | This template is made with <img className={styles.copyright_hearth} src="./icons/love.png" alt="hearth"/> by
                     <span className={styles.copyright_text}> Colorlib</span></p>
                  </div>
                  <div className={styles.footer_column}>
                     <ul className={styles.footer_list}>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#"
                              >About</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#"
                              >Blog</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#"
                              >Faq</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#">Returns</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#">Contact</Link>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer_column}>
                     <ul className={styles.footer_list}>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">My Account</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Shipping</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Our Policies</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Afiliates</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer_column}>
                     <p className={styles.footer_text}>
                     Subscribe to our newsletter
                     </p>
                     <form onSubmit={handleSubmit} action='#' method='post'>
                        <div className={styles.footer_form}>
                          <input
                            type='text'
                            name='text'
                            placeholder='Your email here'
                            className={styles.footer_input}
                            value={email}
                            onChange={handleChange}
                          />
                          <button type='submit' className={styles.footer_subscribe}>SUBSCRIBE</button>
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                      </form>
                  </div>
               </div>
               <div className={styles.footer_socials}>
                     <Link to="https://www.pinterest.com/">
                        <img className={styles.icons} src="./icons/pinterestblack.png" alt="pinterest"/>
                     </Link>
                     <Link to="https://www.facebook.com">
                        <img className={styles.icons} src="./icons/facebook.png" alt="facebook"/>
                     </Link>
                     <Link to="https://www.twitter.com">
                        <img className={styles.icons} src="./icons/twitter.png" alt="twitter"/>
                     </Link>
                     <Link to="https://www.linkedin.com">
                        <img className={styles.icons} src="./icons/linkedin.png" alt="linkedin"/>
                     </Link>
               </div>
            </div>
         </footer>
  )
};

export default Footer;