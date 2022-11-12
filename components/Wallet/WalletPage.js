import React, { useState } from "react";
import styles from "../../sass/Wallet.module.scss";
import Image from "next/image";
import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai"

const WalletPage = () => {
    const [modal , setModal] = useState(false)
  return (
    <section className={styles.walletPage}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.sec1}>
            <h1 className={styles.h1}>Crypto wallets</h1>
            <p className={styles.p}>Add and connect your crypto wallets</p>
            <div className={styles.flexcard}>
              <div className={styles.card1}>
                <div className={styles.cardflex}>
                  <Image
                    src="/assets/images/money-bill-wave-solid.png"
                    className={styles.image}
                    width={22}
                    height={18}
                  />
                  <h3 className={styles.h3}>Total Balance</h3>
                </div>

                <h2 className={styles.h2}>165216.54 $</h2>
              </div>
              <div className={styles.card1}>
               <div className={styles.cardflex}>
                  <Image
                    src="/assets/images/BFIC_logo.png"
                    className={styles.image}
                    width={52}
                    height={18}
                  />
                  <h3 className={styles.h3}>BFIC Balance</h3>
                </div>

                <h2 className={styles.h2}>165216.54 $</h2>
              </div>
              <div className={styles.card3}>
                <AiOutlinePlus className={styles.icon}/>
                 <div className={styles.flexcard3}>
                      <Image src="/assets/images/Path 980.png" width={25} height={25}/>
                      <h3 className={styles.h3}>Connect to MetaMask</h3>
                 </div>
              </div>
            </div>
           

            <h1 className={styles.h1}>Save payment methods</h1>
            <p className={styles.p}>Add and connect your credit or debit cards</p>
            <div className={styles.flexcard}>
              <div className={styles.card1}>
                <div className={styles.cardflex}>
                  <Image
                    src="/assets/images/Untitled-2.png"
                    className={styles.image}
                    width={22}
                    height={18}
                  />
                  <h3 className={styles.h3}>CryptoCash</h3>
                </div>

                <h2 className={styles.visanumber}>**** **** **** 9873</h2>
                <div className={styles.flexcard2}>
                    <h2 className={styles.h2}>Expires</h2>
                    <h2 className={styles.h2}>03 - 26</h2>
                </div>
              </div>
              <div className={styles.card1}>
               <div className={styles.cardflex}>
                  <Image
                    src="/assets/images/icons8-visa.png"
                    className={styles.image}
                    width={22}
                    height={18}
                  />
                  <h3 className={styles.h3}>Visa</h3>
                </div>

                <h2 className={styles.visanumber}>**** **** **** 1157</h2>
                <div className={styles.flexcard2}>
                    <h2 className={styles.h2}>Expires</h2>
                    <h2 className={styles.h2}>03 - 26</h2>
                </div>
              </div>

              <div className={styles.card1}>
               <div className={styles.cardflex}>
                  <Image
                    src="/assets/images/icons8-mastercard-logo.png"
                    className={styles.image}
                    width={32}
                    height={18}
                  />
                  <h3 className={styles.h3}>Master Card</h3>
                </div>

                <h2 className={styles.visanumber}>**** **** **** 9757</h2>
                <div className={styles.flexcard2}>
                    <h2 className={styles.h2}>Expires</h2>
                    <h2 className={styles.h2}>03 - 26</h2>
                </div>
              </div>

              <div className={styles.cardadd}>
                <AiOutlinePlus className={styles.icon}/>
                 <div className={styles.flexcard3}>   
                      <h3 className={styles.h3}>Add more cards</h3>
                 </div>
              </div>
           
            </div>

          </div>
          <div className={styles.sec2}>
              <div className={styles.card}>
                  <h3 className={styles.h33}>Rewards</h3>

              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletPage;
