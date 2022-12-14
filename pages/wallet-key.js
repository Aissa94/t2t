import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styles from '../sass/Home.module.scss'
import successStyles from '../sass/RegisterSuccess.module.scss'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useAuthContext } from '../context/auth_context'


import { Spot_1, Spot_2, Spot_3, Spot_4 } from '../components/Shared/SVG'
import { classNames } from '../utils/helpers'

function WalletKey() {
  const [isLoading, setIsLoading] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false)
  const [downloadedKey, setDownloadedKey] = useState(false)
  const {auth} = useAuthContext()
  const [key, setKey] = useState(
    '0x1897da1d241c03c275eda968a9f9f15090aa65b0856d5190a1360bb367a4a6b1'
  )

  const handleCopy = async () => {
    const key = document.getElementById('key')
    await navigator.clipboard.writeText(key.innerHTML)
    setCopiedKey(true)
  }

  const handleDownload = () => {
    const key = document.getElementById('key')
    html2canvas(key).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      //pdf.addImage(imgData, 'JPEG', 50, 20 , 100 , 30)
      pdf.text(key.innerHTML, 5, 20)
      pdf.save('private-key.pdf')
      setDownloadedKey(true)
    })
  }

  useEffect(() => {
    if (auth)
      setKey(auth.privateKey)
  }, [key])

  return (
    <div className={ styles.container }>
      <Head>
        <title>Time2Travel Wallet</title>
      </Head>

      <main className={ styles.main }>
        <Navbar />
        <section>
          <div>
            <Spot_1 />
            <Spot_2 />
            <Spot_3 />
            <Spot_4 />
          </div>

          <div className={ successStyles.keyContainer }>
            <div className={ successStyles.keyContent }>
              <h1 className={ successStyles.title }>Save your private key</h1>
              <span className={ successStyles.note }>
                Below is your Time2Travel Private Key. It is very important that
                you copy it and keep it safe. If it is lost,you will not be able
                to Login to your account.
              </span>
              <div className={ successStyles.keyContent }>
                <p className={ successStyles.keybox }>
                  <span
                    className={ successStyles.key }
                    id="key">
                    { key }
                  </span>
                </p>
                <div className={ successStyles.keyAction }>
                  <button
                    className={ successStyles.keyCopy }
                    onClick={ handleCopy }
                  >
                    Copy Private Key
                  </button>
                  <button
                    className={ successStyles.keyDownload }
                    onClick={ handleDownload }
                  >
                    Download PDF
                  </button>
                </div>
              </div>

              <p className={ successStyles.alert }>
                You need to copy and download the Private Key before you can
                continue
              </p>

              <div
                className={ successStyles.startBox }
                id="startBox">
                <button
                  href="/"
                  className={ classNames(
                    !copiedKey || !downloadedKey ? 'opacity-50' : '',
                    'text-white text-lg font-bold bg-clr-blue-light py-2 px-5 rounded-full z-30 shadow-lg shadow-clr-gray-normal border-none'
                  ) }
                  disabled={ !copiedKey || !downloadedKey }
                  onClick={ () => console.log('test') }
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WalletKey
