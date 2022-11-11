import React from 'react';
import styles from '../../sass/Footer.module.scss'
import Image from "next/image";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaFacebook ,FaInstagram,FaTwitterSquare,FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftSection}>

                    <div className={styles.logoSection}>
                        <div>
                            <div className={styles.logo}>
                                <Image src='/assets/images/Component 9 – 1.png' alt="loadg" width="60" height="52" />
                                <div className={styles.dev}>Time to Travel</div>
                            </div>

                        </div>
                        <div className={styles.logo2} >
                            <Image src='/assets/images/Group 672.png' alt="loadg" width="134" height="41" />
                        </div>


                    </div >
                    <div className={styles.text}>
                        Time2Travel is a platform that allows you to book and manage personal vacations
                        or business trips including booking multiple flights, hotels, private jets/charter
                        flights, and more. Choose from hundreds of destinations, thousands of cities and millions
                        of properties available on Time2Travel and avail discounts as you use cryptocurrency exclusively
                        to make payments on our website.

                    </div>




                </div>
                <div className={styles.bottomSection}>

                    <div>
                        <ul className={styles.ul}>
                            <h2>Resources</h2>
                            <li>FAQ</li>
                            <li>Cancellation or transfer</li>
                            <li>Newsroom</li>
                            <li>International travel Docs</li>
                            <li>Refund Policy</li>
                        </ul>



                    </div>

                    <div>
                        <ul className={styles.ul}>
                            <h2>Legal</h2>
                            <li>Privacy Policy</li>
                            <li>Terms of use</li>
                        </ul>



                    </div>
                    <div>
                        <ul className={styles.ul}>
                            <h2>Company</h2>
                            <li>About us</li>
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



            <div className={styles.rightSection}>
                <h1 className={styles.head}>
                    Stay Tuned
                </h1>
                <div className={styles.text}>
                    Subscribe to out newsletter and never miss our offers.
                    <br />
                    Our newsletter is sent once a week, every Monday.
                </div>

                <div className={styles.email}>
                    <input className={styles.input} placeholder="email@example.com" />
                </div>
                <div>
                    <h2>Follow us</h2>
                </div>
                <div className={styles.social}>
                <FaFacebook color="#4A94DE" size={30}/>
                <FaInstagram color="#4A94DE" size={30}/>
                <FaTwitterSquare color="#4A94DE" size={30}/>
                <FaTelegram color="#4A94DE" size={30}/>
               
                </div>
            </div>

        </div>
    )
}

export default Footer
