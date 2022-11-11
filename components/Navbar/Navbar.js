import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { TfiTicket } from "react-icons/tfi";
import { BsPerson } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <div>
          <Image
            src="/assets/images/Component 9 – 1.png"
            alt="loadg"
            width="95"
            height="84"
          />
        </div>
      </Link>

      <div className={styles.menu}>
        <div className={styles.profile}>
          <img
            src="/assets/images/NoPath-1.png"
            alt="images"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.toggle}>
          <button className={styles.btn} onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose className={styles.icons} />
            ) : (
              <FiMenu className={styles.icons} />
            )}
          </button>
        </div>

        {open && (
          <div className={styles.menuu}>
            <ul className={styles.ul}>
              <div className={styles.flex}>
                <BsPerson className={styles.icons} />
                <li className={styles.li}> Manage account</li>
              </div>
              <div className={styles.flex}>
                <TfiTicket className={styles.icons} />
                <li className={styles.li}>Bookings & Trips</li>
              </div>
              <div className={styles.flex}>
                <FaWallet className={styles.icons} />
                <li className={styles.li}>Rewards & Wallet</li>
              </div>
              <div className={styles.flex}>
                <AiFillLike className={styles.icons} />
                <li className={styles.li}>Saved</li>
              </div>
              <div className={styles.flex}>
                <BiLogOut className={styles.icons} />
                <li className={styles.li}>LogOut</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <>
<div className={styles.profile}>
  <img
    src="/assets/images/NoPath-1.png"
    alt="images"
    width={50}
    height={50}
  />
</div>
<div>
  <h3 className={styles.h3Effect}>Jehad</h3>
</div>
<div className={styles.toggle}>
  <button className={styles.btn} onClick={() => setOpen(!open)}>
    {open ? (
      <AiOutlineClose className={styles.icons} />
    ) : (
      <FiMenu className={styles.icons} />
    )}
  </button>
</div>
</> */
}
