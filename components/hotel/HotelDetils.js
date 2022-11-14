import React from "react";
import styles from "../../sass/Hotel.module.scss";
import Image from "next/image";
import HotelCard from "./HotelCard";

const HotelDetils = () => {
  return (
    <div className={styles.details}>
      <div className={styles.box}>
        <div className={styles.grid}>
          <div className={styles.sec1}>
            <h1 className={styles.h1}>Best deals</h1>
            <HotelCard
              image={"/assets/images/4.jpg"}
              nameHotel={"Hotel #1 with a long Name"}
              place={"Trade Centre, Dubai"}
              description={
                "Three-Bedroom Apartment Entire apartment • 3 bedrooms • 1living room • 2 bathrooms • 1 kitchen • 130m² 3 extra-large double beds"
              }
              price={"30$"}
              btn={"Check Available"}
              rating={"Rating 9.3"}
              reviews={"110 Reviews"}
            />
            <HotelCard
              image={"/assets/images/3.jpg"}
              nameHotel={"Hotel #1 with a long Name"}
              place={"Trade Centre, Dubai"}
              description={
                "Three-Bedroom Apartment Entire apartment • 3 bedrooms • 1living room • 2 bathrooms • 1 kitchen • 130m² 3 extra-large double beds"
              }
              price={"30$"}
              btn={"Check Available"}
              rating={"Rating 9.3"}
              reviews={"110 Reviews"}
            />

            <HotelCard
              image={"/assets/images/6.jpg"}
              nameHotel={"Hotel #1 with a long Name"}
              place={"Trade Centre, Dubai"}
              description={
                "Three-Bedroom Apartment Entire apartment • 3 bedrooms • 1living room • 2 bathrooms • 1 kitchen • 130m² 3 extra-large double beds"
              }
              price={"30$"}
              btn={"Check Available"}
              rating={"Rating 9.3"}
              reviews={"110 Reviews"}
            />
            <HotelCard
              image={"/assets/images/2.jpg"}
              nameHotel={"Hotel #1 with a long Name"}
              place={"Trade Centre, Dubai"}
              description={
                "Three-Bedroom Apartment Entire apartment • 3 bedrooms • 1living room • 2 bathrooms • 1 kitchen • 130m² 3 extra-large double beds"
              }
              price={"30$"}
              btn={"Check Available"}
              rating={"Rating 9.3"}
              reviews={"110 Reviews"}
            />
          </div>
          <div className={styles.sec2}>
             <div className={styles.flexContent}>
                <h1 className={styles.h1}>Filter</h1>
                <p className={styles.p}>Reset</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetils;
