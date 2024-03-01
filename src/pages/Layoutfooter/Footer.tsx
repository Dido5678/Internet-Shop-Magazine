import * as React from 'react';
import styles from './layout.module.scss';
import { Link } from "react-router-dom";



interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
            <div className={styles.footer_container}>
            <div className={styles.footer_block}>
                  <div className={styles.footer_column}>
                     <h5 className={styles.footer_title}>Services</h5>
                     <ul className={styles.footer_list}>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#">Strategy Design</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#"
                              >Product Design</a
                           >
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#"
                              >Content Strategy</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#"
                              >Brand Strategy</Link>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer_column}>
                     <h5 className={styles.footer_title}>Help And Advice</h5>
                     <ul className={styles.footer_list}>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#"
                              >How it works</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#"
                              >Contact Support</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link} to="#"
                              >Privacy Policy</Link>
                        </li>
                        <li className={styles.footer_item}>
                           <Link className={styles.footer_link } to="#">FAQ</Link>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer_column}>
                     <h5 className={styles.footer_title}>Company</h5>
                     <ul className={styles.footer_list}>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">About</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Blog</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Contact</a>
                        </li>
                        <li className={styles.footer_item}>
                           <a className={styles.footer_link} href="#">Jobs</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footer_column}>
                     <div className={styles.footer_title}>Get in Touch</div>
                     <p className={styles.footer_text}>
                        Feel free to get in touch with us vai email
                     </p>
                     <Link className={styles.footer_mail}
                        to="mailto:info.webovio@gmail.com"
                        >info.webovio@gmail.com</Link>
                     <ul className={styles.footer_socials}>
                        <li className={styles.socials__item}>
                           
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
  )
};

export default Footer;