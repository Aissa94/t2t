import React, { useState } from 'react'
import styles from '../../sass/SearchTabs.module.scss'
import FlightForm from './FlightForm'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi'
import { RiGroupFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'



function SearchTabs() {
  const [toggleState, setToggleState] = useState(1)

  return (
    <div className={styles.navItem}>
      <ul className={styles.ul}>
        <li
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => setToggleState(1)}
        >
          Flights
        </li>
        <li
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => setToggleState(2)}
        >
          Hotels
        </li>

        <li
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => setToggleState(3)}
        >
          Homestay
        </li>
        <li
          className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => setToggleState(4)}
        >
          Car Rental
        </li>
        <li
          className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => setToggleState(5)}
        >
          Business
        </li>
      </ul>

      <motion.div
        className={styles.conetnt}
        layout
        transition={{
          type: 'spring',
          stiffness: 100,
          opacity: { ease: 'linear' },
        }}
      >
        <div className={toggleState === 1 ? 'content  active-content' : 'content'} >
            <FlightForm />
          {/* <div className={styles.allBtn}>
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
            <div className={styles.item}>
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
          </div> */}
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
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
          className={toggleState === 3 ? 'content  active-content' : 'content'}
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
          className={toggleState === 4 ? 'content  active-content' : 'content'}
        >
          <div className={styles.allBtn}>
            <button className={styles.btn1}>Return to same location</button>
            <button className={styles.btn1}>
              Return to different location
            </button>
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
            <div className={styles.item}>
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
          className={toggleState === 5 ? 'content  active-content' : 'content'}
        >
          <div className={styles.allBtn}>
            <button className={styles.btn1}>One-Way</button>
            <button className={styles.btn1}>Round Trip</button>
            <hr
              style={{
                height: '30px',
                width: '2px',
                margin: '0 3rem 0 2rem',
                backgroundColor: '#aaa',
              }}
            />
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
            <div className={styles.item}>
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
  )
}

export default SearchTabs
