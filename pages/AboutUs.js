import React from "react";
import styles from "../sass/FooterPages.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  return (
    <>

    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.title}>About Us</h1>

        <p>
          Time2Travel is a subsidiary travel company of Innovation Factory.
          Time2Travel is a platform that allows you to book and manage personal
          vacations or business trips including booking multiple flights,
          hotels, private jets/charter flights, and more.
        </p>

        <p>
          While travellers constantly face issues in foreign currency exchange
          and payments when travelling across multiple destinations, Time2Travel
          enables crypto users to link their digital wallet and pay through
          cryptocurrency for all bookings made through our platform. Users can
          also choose from thousands of destinations, cities and millions of
          properties available on Time2Travel and avail discounts as you use
          cryptocurrency exclusively to make payments on our website.
        </p>

        <p>
          Book and manage your entire vacation or business trip from flights,
          private jet charter flights, car rentals, hotels, and excursions in
          minutes. Luxury travel is personified as you take on the world with
          next-gen tech.
        </p>
      </div>
  
    </div>
    <Footer />
    </>
  );
};
export default AboutUs;
