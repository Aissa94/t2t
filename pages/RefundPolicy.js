import React from "react";
import styles from "../sass/FooterPages.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RefundPolicy = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.title}>Refund Policy</h1>

          <h2>Refund timelines, policies & processes</h2>
          <p>
            Due to COVID-19, most refunds for flights, including when they’re
            part of a package, are issued within 12 weeks. Some refunds could
            take a bit longer, depending on the airline.
            </p>
            Refunds for hotel, car,
            or activity, including when they’re part of a package, are processed
            within our normal timeframe, 24 hours from the cancellation request.
            Keep in mind, your bank or payment service determines when the funds
            become available in your account.
            <p> 
            <p>
            In other circumstances not
            impacted by COVID-19, here’s what you should know about refund
            timelines:
            </p>
          </p>
          <ul>
            <li>
              Time2Travel may take up to 24 hours to process your refund. Once
              that has happened, your bank or payment service (such as PayPal)
              will take care of the rest. Just know that it may take them up to
              7 days to post the credit to your account, and up to 2 billing
              cycles to show the credit on your statement.
            </li>
            <li>
              You’ll see the refund on your original method(s) of payment. So,
              say you paid using your debit card -- that’s where the money will
              be refunded. We’ll send you an email with the nitty-gritty about
              your refund amount, and how and when you'll get it.
            </li>
            <li>
              If your credit card statement includes a charge from a third party
              (such as a low-cost airline, rental car company, or private
              charter flight), you’ll receive your refund from them, not
              Expedia. If this is the case, get in touch with that third party
              to ask any questions about refunds.
            </li>
            <li>
              If you've been charged a deposit or partial payment, you'll be
              refunded for that amount, minus any fees. Say you paid a USD 500
              deposit on your hotel, but you ended up having to cancel. If the
              hotel charges a USD 40 cancel fee, you’d get USD 460 back.
            </li>
          </ul>

          <h4>The basics on cancellation fees</h4>
          <ul>
            <li>
              If you used points to pay for your entire booking, and you’ve been
              charged a cancellation fee, that’ll come out of your points
              balance.
            </li>
            <li>
              {" "}
              For instance, say you used 1,500 of your 2,000 points to pay for
              your whole trip. We’ll assume the cancel fee is USD 20, so that
              will be converted to points and removed from your remaining 500
              points.
            </li>
            <li>
              {" "}
              If you used points and a credit card to pay for your booking, any
              cancellation fees will come out of the points portion of your
              refund first, followed by the credit card portion, if necessary.
            </li>
            <li>
              If you used all your 2,000 points to pay for your trip, then used
              your credit card to cover the remaining cost, the cancel fee will
              come out of your points balance first. So say the fee is USD 20,
              that means you’ll get 1,980 points put back into your points
              account.
            </li>
          </ul>

          <h4>Flights</h4>
          <ul>
            <li>
              Did you cancel within 24 hours of making your reservation? Some
              flight bookings are eligible for a full refund.
            </li>
            <li>
              Need to cancel a non-refundable flight? Instead of getting your
              refund back, you may instead get a flight credit to use for a
              future booking.
            </li>
          </ul>
          <h4>Hotels</h4>
          <ul>
            <li>
              Most hotels refund all your money if you cancel before their
              cancellation deadline.
            </li>
            <li>
              Some hotel rooms are non-refundable, meaning you won’t get your
              money back if you cancel.
            </li>
            <li>
              If you cancel a non-refundable hotel booking, or cancel your
              booking after the hotel's cancellation deadline, you won’t be able
              to get a refund, no matter how you paid (using points or your
              credit card, for instance).
            </li>
            <li>
              If you canceled before the hotel's cancellation deadline but still
              see a charge from them on your credit card statement, get in touch
              with the hotel itself to make sure you get your refund
            </li>
          </ul>

          <h4>Vacation Packages</h4>
          <ul>
            <p>If you booked your package:</p>
            <li>
              Within the last 24 hours: You may be able to cancel and get all
              your money back.
            </li>
            <li>
              More than 24 hours ago: Your airline, hotel, car rental company,
              or activity provider may have a cancellation fee that we’ll pass
              on to you.
            </li>
            <p>
              Check out how to change or cancel your vacation package for more
              info.
            </p>
          </ul>

          <h4>Cars</h4>
          <ul>
            <li>
              Does your prepaid car booking qualify for a refund? Check out your
              itinerary for details. If it does, just know you have to cancel
              the booking at least 6 hours before pick-up.
            </li>
            <li>
              Need to return the car early? In this case, you won’t be refunded
              for any unused time.
            </li>
          </ul>

          <h4>Private Charter Flights</h4>
          <p>
            Most charter flight bookings are eligible for a full refund if you
            cancel up to 90 days before departure.
          </p>

          <h4>Activities</h4>
          <p>
            You can get a refund for most activity bookings if you cancel before
            the activity's cancellation deadline. Just keep in mind that some
            activities are non-refundable.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
