import React from 'react'
import WalletNavbar from '../components/Wallet/WalletNavbar'
import WalletPage from '../components/Wallet/WalletPage'
import Head from 'next/head';

const Wallet = () => {
  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
     <WalletNavbar/>
     <WalletPage/>
    </>
  )
}

export default Wallet
