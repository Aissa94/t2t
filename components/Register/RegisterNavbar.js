import React , {useState} from 'react'
import styles from '../../sass/Register.module.scss'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';


const RegisterNavbar = () => {
    const [open ,setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/assets/images/Component 9 – 1.png" alt="sddf"  width={94} height={85}/>
      </div>
      <div className={styles.navbarList}>
          
      </div>
      <div className={open ? styles.submenu : styles.menu }>
        <div className={styles.profile}>
          <img
            src="/assets/images/NoPath-1.png"
            alt="images"
            width={50}
            height={50}
          />
        </div>
         {
            open && (
                <button className={styles.btnw}>Login</button>
            )
         }
        <div className={styles.toggle}>
          <button className={styles.btn} onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose className={styles.icons} />
            ) : (
              <FiMenu className={styles.icons} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default RegisterNavbar