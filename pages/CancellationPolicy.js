import React from "react";
import styles from "../sass/FooterPages.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const CancellationPolicy = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.title}>Cancellation Policy</h1>
          <h3>Change or cancel your reservation</h3>
          <p>
            Need to change or cancel your travel plans? The best place to start
            is your account.
          </p>

          <h3>Free cancellation and no change fees</h3>
          <p>
            <p>
              Many reservations already qualify for either free cancellation or
              no-fee change options. Just sign in to your account and check your
              itinerary. After you review the cancellation policies that apply
              to your reservation, you can change or cancel your reservations
              from within your itinerary. Remember that if you booked a package
              vacation, you'll have to cancel your hotel or other lodging and
              your flight separately.
            </p>
            <p>
              
              If you don't have an account, you can use the itinerary or
              confirmation number in the email you received when you first
              booked your trip.
            </p>
            <p>
         
              For future travel, look for the Free cancellation and No change
              fee filters when you're shopping.
            </p>
          </p>

          <h3>Flexible change policies for travel impacted by COVID-19</h3>
          <p>
            We've also been working with our travel partners to help us provide
            flexible policies.
          </p>
          <ul>
            <li>
              For hotels or other lodging, check your itinerary to see if your
              reservation qualifies for free cancellation. If it doesn't, you
              can still cancel, but standard cancellation policies will apply.
              If you don't see an option to cancel, it might mean that your
              booking is either too close to check-in or is non-refundable.
            </li>

            <li>
              For flights, you may qualify for a no-change-fee cancellation and
              a credit that you can apply to a future flight.
            </li>
          </ul>
          <h3>Change or cancel your reservation</h3>
          <p>
            Need to change or cancel your travel plans? The best place to start
            is your account.
          </p>

          <h3>Free cancellation and no change fees</h3>
          <p>
            Many reservations already qualify for either free cancellation or
            no-fee change options. Just sign in to your account and check your
            itinerary. After you review the cancellation policies that apply to
            your reservation, you can change or cancel your reservations from
            within your itinerary. Remember that if you booked a package
            vacation, you'll have to cancel your hotel or other lodging and your
            flight separately. If you don't have an account, you can use the
            itinerary or confirmation number in the email you received when you
            first booked your trip. For future travel, look for the Free
            cancellation and No change fee filters when you're shopping.
          </p>

          <h3>Flexible change policies for travel impacted by COVID-19</h3>
          <p>
            We've also been working with our travel partners to help us provide
            flexible policies.
          </p>
          <ul>
            <li>
              For hotels or other lodging, check your itinerary to see if your
              reservation qualifies for free cancellation. If it doesn't, you
              can still cancel, but standard cancellation policies will apply.
              If you don't see an option to cancel, it might mean that your
              booking is either too close to check-in or is non-refundable.
            </li>

            <li>
              For flights, you may qualify for a no-change-fee cancellation and
              a credit that you can apply to a future flight.
            </li>
          </ul>
          <p>
            Just sign in to your account and check your itinerary to see if the
            flexible policies apply to your reservation. Need more information?
            Contact us at info@time2travel.com
          </p>

          <h3>The end of change fees?</h3>
          <p>
            Some airlines are making "no change fees” part of their standard
            policy. For airlines with these new policies in place, there are
            some important things to keep in mind when planning your trip.
          </p>
          <ul>
            <li>
              Any COVID-19 change waiver policies take precedence over these new
              policies.
            </li>
            <li>
              These new policies don't typically apply to Basic Economy, Saver,
              or other bargain fares.
            </li>
            <li>
              These new policies typically apply to domestic travel only.
              International travel typically isn't included.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
