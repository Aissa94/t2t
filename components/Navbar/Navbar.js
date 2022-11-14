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
import useAuth from "../../hook/useAuth";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/logout",
        auth.userId
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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

      <nav className={styles.navbar}>
        <ul className={styles.ull}>
          <li className={styles.lii}>Home</li>
          <div className={styles.height}/>
          <li className={styles.lii}>Flights</li>
          <div className={styles.height}/>
          <li className={styles.lii}>Hotels</li>
          <div className={styles.height}/>
          <li className={styles.lii}>Car Rental</li>
          <div className={styles.height}/>
          <li className={styles.lii}>Homestay</li>
        </ul>
        <button className={styles.btnNavber}>Business</button>
      </nav>

      {auth.accessToken ? (
        <div className={open ? styles.active : styles.menu}>
          <div className={styles.profile}>
            <img
              src="/assets/images/NoPath-1.png"
              alt="images"
              width={50}
              height={50}
            />
          </div>

          {open && (
            <Link href={"/wallet"}>
              <button className={styles.wallet}>Mr.Omar</button>
            </Link>
          )}

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
                  <li
                    className={styles.li}
                    onClick={handleLogOut}
                    style={{ cursor: "pointer" }}
                  >
                    LogOut
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className={open ? styles.active : styles.menu}>
          <div className={styles.profile}>
            <img
              src="/assets/images/0000.png"
              alt="images"
              width={50}
              height={50}
            />
          </div>

          {open && (
            <Link href={"/login"}>
              <button className={styles.wallet}>Login</button>
            </Link>
          )}

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
      )}
    </header>
  );
};

export default Navbar;
