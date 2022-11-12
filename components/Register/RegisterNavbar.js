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
    </header>
  );
}

export default RegisterNavbar