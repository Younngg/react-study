import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Mainbanner = () => {
  return (
    <MainSlider>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0} //슬라이더 사이 margin
        slidesPerView={1} //한번에 보여지는 개수
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        /* onSlideChange={() => console.log('slide change')} //슬라이드 넘길때마다 콜백함수 호출
        onSwiper={(swiper) => console.log(swiper)} */
      >
        <SwiperSlide>
          <img src='img/slide/slide01.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='img/slide/slide02.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='img/slide/slide03.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='img/slide/slide04.png' alt='' />
        </SwiperSlide>
      </Swiper>
    </MainSlider>
  );
};

export default Mainbanner;

const MainSlider = styled.div`
  width: 1200px;
  background-color: green;
  margin: 1rem auto;
  & .swiper-slide img {
    width: 100%;
  }
`;
