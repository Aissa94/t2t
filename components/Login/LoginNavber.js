import React, { useState } from "react";
import styles from "../../sass/Login.module.scss";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";


const LoginNavber = () => {
    const [open ,setOpen] = useState(false)
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link href={"/"}>
        <Image src="/assets/images/Component 9 – 1.png" alt="sddf"  width={95} height={84}/>
        </Link>
      </div>
      
    </header>
  );
};

export default LoginNavber;
