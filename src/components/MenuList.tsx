// MenuList.jsx
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from '../assets/my.module.scss';

interface MenuListProps {
    isMenuClose: boolean;
    toggleMenu: () => void;
  }

const MenuList: React.FC<MenuListProps> = ({ isMenuClose, toggleMenu  }) => {
    const [showWomanContent, setShowWomanContent] = useState(false);
    const [showManContent, setShowManContent] = useState(false);
    const [showChildrenContent, setShowChildrenContent] = useState(false);
    const [showBagsContent, setShowBagsContent] = useState(false);
    const [showEyewearContent, setShowEyewearContent] = useState(false);
    const [showFootwearContent, setShowFootwearContent] = useState(false);



    const handleCheckboxWomanClick = () => {
        setShowWomanContent(!showWomanContent);
        setShowManContent(false); // Close man content if it's open
        setShowChildrenContent(false); // Close children content if it's open
    };

    const handleCheckboxManClick = () => {
        setShowManContent(!showManContent);
        setShowWomanContent(false); // Close woman content if it's open
        setShowChildrenContent(false); // Close children content if it's open
    };




    const handleCheckboxChildrenClick = () => {
        setShowChildrenContent(!showChildrenContent);
        setShowWomanContent(false); // Close woman content if it's open
        setShowManContent(false); // Close man content if it's open
    };

    const handleCheckboxBagsClick = () => {
        setShowBagsContent(!showBagsContent);
        setShowWomanContent(false); // Close woman content if it's open
        setShowManContent(false); // Close man content if it's open
        setShowChildrenContent(false); // Close children content if it's open
    };

    const handleCheckboxEyewearClick = () => {
        setShowEyewearContent(!showEyewearContent);
        setShowWomanContent(false); // Close woman content if it's open
        setShowManContent(false); // Close man content if it's open
        setShowChildrenContent(false); // Close children content if it's open
        setShowBagsContent(false); // Close bags content if it's open
    };

    const handleCheckboxFootwearClick = () => {
        setShowFootwearContent(!showFootwearContent);
        setShowWomanContent(false); // Close woman content if it's open
        setShowManContent(false); // Close man content if it's open
        setShowChildrenContent(false); // Close children content if it's open
        setShowBagsContent(false); // Close bags content if it's open
        setShowEyewearContent(false); // Close eyewear content if it's open
    };


    return (
        <Menu isOpen={isMenuClose} width={'400px'} pageWrapId={"page-wrap"} className={styles.menu_container}>
            <img src="./icons/close-white.png" alt="close" className={styles.close} onClick={toggleMenu}/>
            <h2 className={styles.categories}>Categories</h2>
            <div className={styles.menu_block}>
                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxWomanClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Woman wear</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div> 
                       </label>
                    </li>
                </ul>
                {showWomanContent && (
                     <ul>
                       <li>
                           <label className={styles.subLabel}>
                               <input type="checkbox" />
                               <span className={styles.span}>Midi Dresses</span>
                           </label>
                       </li>
                       <li>
                           <label className={styles.subLabel}>
                               <input type="checkbox" />
                               <span>Maxi Dresses</span>
                           </label>
                       </li>
                       <li>
                           <label className={styles.subLabel}>
                               <input type="checkbox" />
                               <span>Prom Dresses</span>
                           </label>
                       </li>
                       <li>
                           <label className={styles.subLabel}>
                               <input type="checkbox" />
                               <span>Little Black Dresses</span>
                           </label>
                       </li>
                       <li>
                           <label className={styles.subLabelEnd}>
                               <input type="checkbox" />
                               <span>Mini Dresses</span>
                           </label>
                       </li>
                   </ul>
                )}
                </div>

                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxManClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Man wear</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div>
                        </label>
                    </li>
                </ul>
                {showManContent && (
                    <ul>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Man Dresses</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Man Black Dresses</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabelEnd}>
                                <input type="checkbox" />
                                <span>Man Mini Dresses</span>
                            </label>
                        </li>
                    </ul>
                )}
                </div>

                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxChildrenClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Children</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div>
                        </label>
                    </li>
                </ul>
                {showChildrenContent && (
                    <ul>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Children Dresses</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabelEnd}>
                                <input type="checkbox" />
                                <span>Mini Dresses</span>
                            </label>
                        </li>
                    </ul>
                )}
                </div>

                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxBagsClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Bags & Purses</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div>
                        </label>
                    </li>
                </ul>
                {showBagsContent && (
                    <ul>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Bags</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabelEnd}>
                                <input type="checkbox" />
                                <span>Purses</span>
                            </label>
                        </li>
                    </ul>
                )}
                </div>

                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxEyewearClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Eyewear</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div>
                        </label>
                    </li>
                </ul>
                {showEyewearContent && (
                    <ul>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Eyewear Style 1</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Eyewear Style 2</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabelEnd}>
                                <input type="checkbox" />
                                <span>Eyewear Style 3</span>
                            </label>
                        </li>
                    </ul>
                )}
                </div>

                <div className={styles.box}>
                <ul>
                    <li>
                        <label onClick={handleCheckboxFootwearClick} className={styles.label}>
                            <input type="checkbox" />
                            <div className={styles.boxic}>
                                <span>Eyewear</span>
                                <img className={styles.done} src="./icons/check.png" alt="done" />
                            </div>
                        </label>
                    </li>
                </ul>
                {showFootwearContent && (
                    <ul>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Footwear 1</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabel}>
                                <input type="checkbox" />
                                <span>Footwear 2</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.subLabelEnd}>
                                <input type="checkbox" />
                                <span>Footwear 3</span>
                            </label>
                        </li>
                    </ul>
                )}
                </div>
            </div>
        </Menu>
    );
};

export default MenuList;




































