import React from "react";
import styles from "../sass/FooterPages.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from 'next/head';

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.title}>FAQ’s</h1>
         <ol>
          <strong>
            <h4>
              <li>What happens after I sign up? </li>
            </h4>
          </strong>

          <p>
            Once a personal user or property partner signs up on Time2Travel to
            create their personal account for booking, or to create and register
            a property listing, a confirmation email will be sent as a secondary
            verification process. Afterwards, a property partner can update
            booking specifics such as the location, calendar, or prices, and
            confirm other property details. Users can immediately start entering
            their payment information and link their digital wallet to use
            crypto as their payment method prior to booking or during the
            booking process.
          </p>

          <strong>
            <li>
              <h4>
                Do I have to confirm all bookings processed through Time2Travel?
              </h4>
            </li>
          </strong>

          <p>
            Once a customer books a stay at your property, it is confirmed and
            booked immediately, until a customer cancels the booking.
          </p>
          <strong>
            <h4>

              <li>What happens after a guest cancels a booking?</li>
            </h4>
          </strong>

          <p>
            The cancellation process depends entirely on the property’s
            cancellation policy. If a guest cancels a reservation and your
            property has a free cancellation policy, the guest will not be
            charged, and you won’t pay a commission. If the property doesn’t
            enforce a free cancellation policy, the guest will pay a fee and you
            will pay a commission on the amount you were paid.
          </p>
          <strong>
            <h4>
              <li>Can I book a multicity trip?</li>
            </h4>
          </strong>

          <p>
            Yes, Time2Travel is dedicated especially for multi-destination trips
            and extended business trips, so you can book multiple flights, check
            the transit details, and sudden changes to flight dates or times
            within the same app. You can even book Business Class and
            First-Class flights on your favorite airline directly through
            Time2Travel.
          </p>
          <strong>
            <li>
              <h4>
                How will I get the flight reservation confirmation and details?
              </h4>
            </li>
          </strong>

          <p>
            You will get a unique confirmation code from Time2Travel via e-mail
            as well as through text message, if you’ve registered with a phone
            number on our platform. You will also get your e-ticket through the
            airline. If you do not receive a correspondence through the airline
            partner, please contact us at{" "}
            <strong>
              <a href="mailto:info@time2travel.com">info@time2travel.com</a>.
            </strong>
          </p>
          <strong>
            <li>
              <h4>
                Can I confirm my seat assignment on my flight through
                Time2Travel?
              </h4>
            </li>
          </strong>

          <p>
            According to airline policies and procedures, booking platforms
            apart from the dedicated airline app or website cannot process seat
            assignments for you. However, once you’ve purchased your tickets and
            you receive your ticket confirmation, you can contact the airline
            with your booking number and select your seat prior to your flight.
          </p>
          <strong>
            <li>
              <h4>Can I book private jets or charter flights?</h4>
            </li>
          </strong>

          <p>
            Yes! Time2Travel makes planning your business trips or
            ultra-personal vacations that much easier to plan with our exclusive
            charter flight or private jet partners at your selected
            destinations. Stay updated on our FAQs page and newsletter as we
            continue to add new partners.
          </p>
        </ol>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default FAQ;
