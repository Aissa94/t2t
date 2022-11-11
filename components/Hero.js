import React, { useState } from "react";
import styles from "../sass/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { RiGroupFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";

const Hero = () => {
 
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  SwiperCore.use([Autoplay]);
  return (
    <section className={styles.hero}>
      <div className={styles.blob1}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#BAE6FF"
            d="M60.4,-37.6C71.6,-15.3,69.6,11.9,57.4,33.1C45.1,54.3,22.5,69.5,0.1,69.5C-22.4,69.4,-44.8,54.1,-57.2,32.8C-69.6,11.6,-72,-15.7,-60.8,-37.9C-49.6,-60.1,-24.8,-77.3,-0.1,-77.2C24.5,-77.2,49.1,-59.9,60.4,-37.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={styles.blob2}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#A7F0BA"
            d="M46.2,-54C59.7,-43.8,70.3,-29,74.5,-12.1C78.7,4.8,76.6,23.9,66.9,36.6C57.2,49.4,39.9,55.9,22.3,63.1C4.7,70.3,-13.3,78.2,-31.6,76.2C-49.8,74.1,-68.2,62,-74.1,45.7C-79.9,29.4,-73.3,8.8,-67.3,-9.6C-61.4,-28,-56.1,-44.3,-45,-54.9C-33.8,-65.6,-16.9,-70.7,-0.3,-70.4C16.4,-70.1,32.7,-64.3,46.2,-54Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.blob3}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M41.9,-17.4C55.8,-0.2,69.4,23.9,62.4,38.5C55.4,53.2,27.7,58.5,9.8,52.8C-8.1,47.2,-16.3,30.6,-28.2,13.1C-40.1,-4.4,-55.9,-22.9,-51.8,-34.4C-47.8,-46,-23.9,-50.5,-4.9,-47.7C14,-44.9,28.1,-34.6,41.9,-17.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.blob4}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E8DAFF"
            d="M68.8,-23.1C78,5.9,66.5,40.8,44.2,55.8C21.9,70.8,-11.2,65.9,-34.1,48.8C-57,31.7,-69.6,2.5,-62.2,-24C-54.9,-50.4,-27.4,-74.2,1.2,-74.6C29.8,-74.9,59.6,-52,68.8,-23.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.conatiner}>
        <div className={styles.grid}>
          <div className={styles.sec1}>
            <div className={styles.gradient} />
            <div className={styles.filter} />
            <h2 className={styles.h2}>Just seconds away from</h2>
            <h1 className={styles.h1}>
              A world of
              <br />
              luxury
            </h1>
            <p className={styles.p}>
              Book and manage your entire vacation or business trip from
              flights, private jet charter flights, car rentals, hotels, and
              excursions with a few clicks.{" "}
            </p>
            <button className={styles.button}>Start your search</button>
          </div>

          <div className={styles.sec2}>
            <Swiper
              className={styles.grid}
              spaceBetween={50}
           
      
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className={styles.box1}>
                <img
                  src="/assets/images/burj-khalifa-dubai-cityscape-skyscrapers-dusk-clearsky-3500x2333-2157.jpg"
                  alt="images1"
                  className={styles.boxImage}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.box2}>
                <div className={styles.image1}>
                  <img
                    src="/assets/images/NoPath.png"
                    alt="images1"
                    className={styles.boxImage}
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    src="/assets/images/eiffel-tower-night-paris-france-reflection-river-thames-4481x3365-8437.jpg"
                    alt="images1"
                    className={styles.boxImage}
                  />
                  <img
                    src="/assets/images/NoPath - Copy (3).png"
                    alt="images1"
                    className={styles.boxImage}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.box1}>
                <div className={styles.image1}>
                  <img
                    src="/assets/images/eiffel-tower-night-paris-france-reflection-river-thames-4481x3365-8437.jpg"
                    alt="images1"
                    className={styles.boxImage}
                  />
                </div>
                <div className={styles.image1}>
                  <img
                    src="/assets/images/eiffel-tower-night-paris-france-reflection-river-thames-4481x3365-8437.jpg"
                    alt="images1"
                    className={styles.boxImage}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={styles.navItem}>
          <ul className={styles.ul}>
            <li
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Flights
            </li>
            <li
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Hotels
            </li>

            <li
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Homestay
            </li>
            <li
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Car Rental
            </li>
            <li
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              Business
            </li>
          </ul>

          <motion.div
            className={styles.conetnt}
            layout
            transition={{
              type: "spring",
              stiffness: 100,
              opacity: { ease: "linear" },
            }}
            >
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className={styles.allBtn}>
                <button className={styles.btn1}>One-Way</button>
                <button className={styles.btn1}>Round Trip</button>
                <button className={styles.btn1}>Multi-City</button>
                <button className={styles.btn1}>Calss</button>
              </div>
              <div className={styles.hr} />
              <div className={styles.margin} />
              <div className={styles.flexItem}>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>From</h4>
                    <h2 className={styles.h2}>Dubai (DBX)</h2>
                  </div>
                </div>
                <div  className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneArrival className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>To</h4>
                    <h2 className={styles.h2}>Sharjah (SHJ)</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Departure</h4>
                    <h2 className={styles.h2}>Sat 2, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Return</h4>
                    <h2 className={styles.h2}>Sun 24, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <RiGroupFill className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Passengers</h4>
                    <h2 className={styles.h2}>2 Adults, 1 Child</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <AiOutlineSearch className={styles.search} />
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
             <div className={styles.flexItem}>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Where are you going?</h4>
                    <h2 className={styles.h2}>Abu Dhabi</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Departure</h4>
                    <h2 className={styles.h2}>Sat 2, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Return</h4>
                    <h2 className={styles.h2}>Sun 24, Sep</h2>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <RiGroupFill className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Guests</h4>
                    <h2 className={styles.h2}>3 Adults, 1 Child</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <AiOutlineSearch className={styles.search} />
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
             <div className={styles.flexItem}>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Where are you going?</h4>
                    <h2 className={styles.h2}>Abu Dhabi</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Departure</h4>
                    <h2 className={styles.h2}>Sat 2, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Return</h4>
                    <h2 className={styles.h2}>Sun 24, Sep</h2>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <RiGroupFill className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Guests</h4>
                    <h2 className={styles.h2}>3 Adults, 1 Child</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <AiOutlineSearch className={styles.search} />
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <div className={styles.allBtn}>
                <button className={styles.btn1}>Return to same location</button>
                <button className={styles.btn1}>Return to different location</button>
              </div>
              <hr className={styles.hr} />
              <div className={styles.margin} />
              <div className={styles.flexItem}>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Pickup Location</h4>
                    <h2 className={styles.h2}>Dubai (DBX)</h2>
                  </div>
                </div>
                <div  className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneArrival className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Drop-off location</h4>
                    <h2 className={styles.h2}>Sharjah (SHJ)</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Departure</h4>
                    <h2 className={styles.h2}>Sat 2, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Return</h4>
                    <h2 className={styles.h2}>Sun 24, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <AiOutlineSearch className={styles.search} />
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 5 ? "content  active-content" : "content"
              }
            >
              <div className={styles.allBtn}>
                <button className={styles.btn1}>One-Way</button>
                <button className={styles.btn1}>Round Trip</button>
                <hr style={{height:"30px" , width:"2px" , margin:"0 3rem 0 2rem" , backgroundColor:"#aaa"}}/>
                <button className={styles.btn1}>Charter</button>
                <button className={styles.btn1}>Seat</button>
              </div>
              <hr className={styles.hr} />
              <div className={styles.margin} />
              <div className={styles.flexItem}>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneDeparture className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>From</h4>
                    <h2 className={styles.h2}>Dubai (DBX)</h2>
                  </div>
                </div>
                <div  className={styles.item}>
                  <div className={styles.itemChild}>
                    <GiAirplaneArrival className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>To</h4>
                    <h2 className={styles.h2}>Sharjah (SHJ)</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Departure</h4>
                    <h2 className={styles.h2}>Sat 2, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <FaCalendarAlt className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Return</h4>
                    <h2 className={styles.h2}>Sun 24, Sep</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemChild}>
                    <RiGroupFill className={styles.icons} />
                  </div>
                  <div className={styles.itemChild2}>
                    <h4 className={styles.h4}>Passengers</h4>
                    <h2 className={styles.h2}>2 Adults, 1 Child</h2>
                  </div>
                </div>
                <div className={styles.item}>
                  <AiOutlineSearch className={styles.search} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
