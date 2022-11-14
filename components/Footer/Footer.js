import React from "react";
import styles from "../../sass/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>

      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.left}>
            <div className={styles.leftSection}>
              <div className={styles.logoSection}>
                <div>
                  <div className={styles.logo}>
                    <Link href="/">
                      <Image
                        src="/assets/images/Component 9 – 1.png"
                        alt="loadg"
                        width="60"
                        height="52"
                      />
                    </Link>

                    <div className={styles.dev}>Time to Travel</div>
                  </div>
                </div>
                <div className={styles.logo2}>
                  <Link href="https://innovationfactory.biz/">
                    <Image
                      src="/assets/images/Group 672.png"
                      alt="loadg"
                      width="134"
                      height="41"
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.text}>
                <p>
                  Time2Travel is a platform that allows you to book and manage
                  personal vacations or business trips including booking
                  multiple flights, hotels, private jets/charter flights, and
                  more. Choose from hundreds of destinations, thousands of
                  cities and millions of properties available on Time2Travel and
                  avail discounts as you use cryptocurrency exclusively to make
                  payments on our website.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.line1}></div>

          <div className={styles.right}>
            <div className={styles.rightSection}>
              <h1 className={styles.head}>Stay Tuned</h1>
              <div className={styles.text}>
                Subscribe to out newsletter and never miss our offers.
                <br />
                Our newsletter is sent once a week, every Monday.
              </div>

              <div className={styles.email}>
                <input
                  className={styles.input}
                  placeholder="email@example.com"
                />
                <div className={styles.checkmark}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                  >
                    <defs>
                      <filter
                        id="Rectangle_326"
                        x="0"
                        y="0"
                        width="37"
                        height="37"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feFlood flood-opacity="0.161" result="color" />
                        <feComposite
                          operator="out"
                          in="SourceGraphic"
                          in2="blur"
                        />
                        <feComposite operator="in" in="color" />
                        <feComposite operator="in" in2="SourceGraphic" />
                      </filter>
                    </defs>
                    <g data-type="innerShadowGroup">
                      <path
                        id="Rectangle_326-2"
                        data-name="Rectangle 326"
                        d="M0,0H18.5A18.5,18.5,0,0,1,37,18.5v0A18.5,18.5,0,0,1,18.5,37h0A18.5,18.5,0,0,1,0,18.5V0A0,0,0,0,1,0,0Z"
                        fill="#449ce1"
                      />
                      <g
                        transform="matrix(1, 0, 0, 1, 0, 0)"
                        filter="url(#Rectangle_326)"
                      >
                        <path
                          id="Rectangle_326-3"
                          data-name="Rectangle 326"
                          d="M0,0H18.5A18.5,18.5,0,0,1,37,18.5v0A18.5,18.5,0,0,1,18.5,37h0A18.5,18.5,0,0,1,0,18.5V0A0,0,0,0,1,0,0Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className={styles.dublecheck}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28.294"
                      height="28.291"
                      viewBox="0 0 28.294 28.291"
                    >
                      <path
                        id="check-double-solid"
                        d="M17.666,2.819A1.651,1.651,0,0,0,15.33.483L8.252,7.567,5.293,4.608A1.651,1.651,0,0,0,2.958,6.943l4.124,4.124a1.652,1.652,0,0,0,2.335,0Zm4.949,6.6A1.651,1.651,0,0,0,20.28,7.082L8.252,19.114,2.819,13.686A1.651,1.651,0,0,0,.483,16.021l6.6,6.6a1.652,1.652,0,0,0,2.335,0l13.2-13.2Z"
                        transform="matrix(-0.259, -0.966, 0.966, -0.259, 5.978, 28.291)"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.left}>
            <div className={styles.list}>
              <div>
                <ul className={styles.ul}>
                  <h2>Resources</h2>
                  <Link href="FAQ">
                    <li>FAQ</li>
                  </Link>

                  <Link href="CancellationPolicy">
                    <li>Cancellation or transfer</li>
                  </Link>

                  <li>Newsroom</li>
                  <li>International travel Docs</li>
                  <Link href="RefundPolicy">
                    <li>Refund Policy</li>
                  </Link>
                </ul>
              </div>

              <div>
                <ul className={styles.ul}>
                  <h2>Legal</h2>
                  <Link href="PrivacyPolicy">
                    <li>Privacy Policy</li>
                  </Link>

                  <Link href="Terms">
                    <li>Terms of use</li>
                  </Link>
                </ul>
              </div>
              <div>
                <ul className={styles.ul}>
                  <h2>Company</h2>
                  <Link href="AboutUs">
                    <li>About us</li>
                  </Link>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

            <div className={styles.support}>
              <p>© 2022 Time to Travel</p>
              <p>Support</p>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <h2>Follow us</h2>
            </div>
            <div className={styles.icons}>
              <Link href="https://www.facebook.com/time2travelofficial">
                <FaFacebook color="#4A94DE" size={30} />
              </Link>
              <Link href="https://www.instagram.com/time2travel.biz/">
                <FaInstagram color="#4A94DE" size={30} />
              </Link>
              <Link href="https://www.tiktok.com/@time_2_travel_/">
                <FaTiktok color="#4A94DE" size={30} />
              </Link>
              <Link href="https://twitter.com/Time_2_Travel_">
                <FaTwitterSquare color="#4A94DE" size={30} />
              </Link>
              <Link href="https://t.me/time2travelbyinnovationfactory">
                <FaTelegram color="#4A94DE" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
