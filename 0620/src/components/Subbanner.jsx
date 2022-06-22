import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Subbanner = () => {
  const pagination = {
    el: '.pagination-box',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <SubSlider>
      <Swiper
        className='mySwiper'
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0} //슬라이더 사이 margin
        slidesPerView={1} //한번에 보여지는 개수
        navigation
        loop={true}
        pagination={pagination}
        /* autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} */
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
        <div className='pagination-box'></div>
      </Swiper>
    </SubSlider>
  );
};

export default Subbanner;

const SubSlider = styled.div`
  width: 1200px;
  background-color: green;
  margin: 1rem auto;
  & .swiper-slide img {
    width: 100%;
  }

  & .mySwiper .pagination-box {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet {
    width: 24px;
    height: 24px;
    opacity: 1;
    border: 2px solid transparent;
    font-size: 0;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet.swiper-pagination-bullet-active {
    border-color: blue;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(1) {
    background: url(./img/slide/thumb01.png) center / cover;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(2) {
    background: url(./img/slide/thumb02.png) center / cover;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(3) {
    background: url(./img/slide/thumb03.png) center / cover;
  }
  & .mySwiper .pagination-box .swiper-pagination-bullet:nth-of-type(4) {
    background: url(./img/slide/thumb04.png) center / cover;
  }
`;
