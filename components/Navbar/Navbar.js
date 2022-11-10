import React from "react";
import styles from "./Navbar.module.scss";
import {FiMenu} from 'react-icons/fi'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src='/assets/images/Component 9 – 1.png' alt="loadg" width="70" height="70" />
      </div>
      <div className={styles.menu}>
         <div className={styles.profile}>
           <img src='/assets/images/NoPath-1.png' alt="images" width={50} height={50} />
         </div>
         <div className={styles.toggle}>
           <FiMenu className={styles.icons}/> 
         </div>
      </div>
    </header>
  );
};

export default Navbar;
