import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/kurwa.jfif';
import slide_image_2 from './assets/images/game.jfif';
import slide_image_3 from './assets/images/start_reg.jfif';
import slide_image_4 from './assets/images/Union2.png';
import slide_image_5 from './assets/images/Union2.png';
import slide_image_6 from './assets/images/Union2.png';
import slide_image_7 from './assets/images/Union2.png';

function App() {
  return (
    <div className="container1">
      <h1 className="heading">События</h1>
      <Swiper
        initialSlide={1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <a href="https://t.me/unlock_it/85">
            <img src={slide_image_1} alt="slide_image" />
          </a>
          <p class='text'>Анонс</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://t.me/unlock_it/118">
            <img src={slide_image_2} alt="slide_image" />
          </a>
          <p class='text'>Воркшопы GameDev</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://t.me/unlock_it/172">
            <img src={slide_image_3} alt="slide_image" />
          </a>
          <p class='text'>Старт регистрации</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_4} alt="slide_image" />
          </a>
          <p class='text'>???</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_5} alt="slide_image" />
          </a>
          <p class='text'>???</p>
        </SwiperSlide>
        {/* <SwiperSlide>
          <a href="">
            <img src={slide_image_6} alt="slide_image" />
          </a>
          <p class='text'>???</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_7} alt="slide_image" />
          </a>
          <p class='text'>???</p>
        </SwiperSlide> */}


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            
          <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L3 12.5L14 23" stroke="#171921" stroke-width="4" stroke-linecap="round"/>
          </svg>

          </div>
          <div className="swiper-button-next slider-arrow">

          <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L13 12.5L2 23" stroke="#171921" stroke-width="4" stroke-linecap="round"/>
          </svg>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
