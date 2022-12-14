import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styles from '../sass/Home.module.scss'
import successStyles from '../sass/RegisterSuccess.module.scss'

import { Spot_1, Spot_2, Spot_3, Spot_4 } from '../components/Shared/SVG'

function RegistrationSuccess() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration Successful</title>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <section>
          <div>
            <Spot_1 />
            <Spot_2 />
            <Spot_3 />
            <Spot_4 />
          </div>

          <div className={successStyles.container}>
            <div className={successStyles.content}>
              <h1 className={successStyles.title}>Registration Successful</h1>
              <p className={successStyles.description}>
                Click on "Get Started" to create your Time2Travel Wallet
              </p>
              <p className={successStyles.confirmMessage}>
                Make sure you create several copies of your private Key because
                it is
              </p>
              <a href='/wallet-key' className={successStyles.getKey}>
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default RegistrationSuccess
