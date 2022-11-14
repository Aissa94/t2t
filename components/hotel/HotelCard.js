import React from 'react'
import styles from '../../sass/Hotel.module.scss'
import Image from 'next/image'

const HotelCard = (props) => {
    const {nameHotel , image , place , description , price , reviews , rating , btn}= props
  return (
    <div className={styles.boxSec1}>
    <div className={styles.flex}>
      <div>
        <Image
          src={image}
          width={225}
          height={162}
          className={styles.image}
          alt="image"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1Content}>
         {nameHotel}
        </h1>
        <h3 className={styles.h3Contnt}><u>{place}</u></h3>
        <p className={styles.p}>
           {description}
        </p>
      </div>
      <div className={styles.price}>
          <h1 className={styles.h1Price}>{rating}</h1>
          <p className={styles.pPrice}>{reviews}</p>
          <h3 className={styles.h3Price}>{price}</h3>
          <button className={styles.btn}>{btn} </button>
      </div>
    </div>
  </div>
  )
}

export default HotelCard