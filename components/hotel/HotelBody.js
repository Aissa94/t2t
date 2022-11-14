import React, { useState } from "react";
import styles from "../../sass/Hotel.module.scss";
import { GiAirplaneDeparture } from "react-icons/gi";
import DateRangeInput from "./DateRangeInput";
import HotelDetils from "./HotelDetils";
import { AiOutlineSearch } from "react-icons/ai";
import {RiGroupFill} from "react-icons/ri"

const HotelBody = () => {
  return (
    <section className={styles.heroHotel}>
      <div className={styles.conatiner}>
        <div className={styles.Image}>
          <img
            src="/assets/images/sydney-main-data.webp"
            className={styles.img}
            alt="image"
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h1 className={styles.h1}>Book Hotel - Sharjah</h1>
            <p className={styles.p}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni…
            </p>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={""}>
            <div className={styles.flexItem}>
              <div className={styles.item}>
                <label className={styles.label}>Where are you going?</label>
                <div className={styles.flex}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <input
                      type="text"
                      placeholder="Stockholm, Sweden"
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <label className={styles.label}>Check In / Check Out</label>
                <DateRangeInput />
              </div>

              <div className={styles.item}>
                <label className={styles.label}>Preferences</label>
                <button className={styles.btnMultiSelect}></button>
              </div>

              <div className={styles.item}>
                <button className={styles.find}>
                  <AiOutlineSearch />
                  Find
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.allbtn}>
          <h3 className={styles.h3}>Are you..</h3>
          <div className={styles.btns}>
            <button className={styles.btn1}>
              looking for an entire home or apartment?
            </button>
            <button className={styles.btn2}>travelling for work?</button>
          </div>
        </div>

        <HotelDetils />
      </div>
    </section>
  );
};

export default HotelBody;
