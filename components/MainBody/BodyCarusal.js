import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCarusal from "./CardCarusal";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import styles from "../../sass/BodyCarousel.module.scss";
import img1 from "../../public/assets/images/1.jpg";
import img2 from "../../public/assets/images/2.jpg";
import img3 from "../../public/assets/images/3.jpg";
import img4 from "../../public/assets/images/4.jpg";
import img5 from "../../public/assets/images/6.jpg";

const BodyCarousel = ({ titleCarsusel }) => {

  const data = [
    {
      'imgUrl': img1,
      'description': 'Tokyo (東京, Tōkyō) is Japans capital and the worlds most populous metropolis',
      'cityName': 'Tokyo',
    },
    {
      'imgUrl': img2,
      'description': ' Dubai is located on the eastern coast of the Arabian Peninsula in the southwest corner of the Arabian Gulf',
      'cityName': 'Dubai',
    },
    {
      'imgUrl': img3,
      'description': 'Paris is a city of dreamers, dreaming of magic and creativity, a haven for top famous artists. ',
      'cityName': 'Paris',
    },
    {
      'imgUrl': img4,
      'description': 'China is the worlds most populous country with a population of 1.44 billion people',
      'cityName': 'Chaina',
    },
    {
      'imgUrl': img5,
      'description': 'Morocco is a country where African, Arab and European cultures are entwined. Located at the mouth of the Mediterranean Sea,',
      'cityName': 'Morroco',
    },


  ]


  SwiperCore.use([Autoplay]);

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.title}>
         
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="36.084"
              height="32.061"
              viewBox="0 0 36.084 32.061"
            >
              <path
                id="Path_980"
                data-name="Path 980"
                d="M17.545,5.923a4,4,0,0,1,6.91,0L38.491,29.985A4,4,0,0,1,35.036,36H6.964a4,4,0,0,1-3.455-6.015l6.765-11.6Z"
                transform="translate(-2.958 -3.939)"
                fill="#35d5c5"
              />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36">
              <path id="Polygon_3" data-name="Polygon 3" d="M22,0,44,36H0Z" fill="#fff" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42">
              <path id="Polygon_2" data-name="Polygon 2" d="M17.545,5.923a4,4,0,0,1,6.91,0L38.491,29.985A4,4,0,0,1,35.036,36H6.964a4,4,0,0,1-3.455-6.015Z" transform="translate(36) rotate(90)" fill="#35d5c5" />
            </svg>

          */}

          <h1 className={styles.text}>{titleCarsusel}</h1>
        </div>

        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          width="42.5"
          height="46.27"
          viewBox="0 0 42.5 46.27"
        >
          <path
            id="Polygon_5-2"
            data-name="Polygon 5"
            d="M13.392,9.426a6,6,0,0,1,10.487,0L32.31,24.583A6,6,0,0,1,27.067,33.5H10.2A6,6,0,0,1,4.96,24.583Z"
            transform="translate(38 3.5) rotate(90)"
            fill="#35d5c5"
          />
        </svg>
      </div>

      <Swiper
        spaceBetween={250}
        slidesPerView={4}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        loop
      >
        {data.map((data) => {
          return <SwiperSlide>
            <CardCarusal imgUrl={data.imgUrl} cityName={data.cityName} description={data.description} />
          </SwiperSlide>
        })}



      </Swiper>
    </div>
  );
};

export default BodyCarousel;
