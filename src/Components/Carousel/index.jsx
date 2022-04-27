import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import banner1 from '../../Assets/Images/banner1.png';
import banner2 from '../../Assets/Images/banner2.png';
import banner3 from '../../Assets/Images/banner3.png';

import { Container } from './styles';

export default function Carousel() {
  return (
    <Container>
      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        <SwiperSlide>
          <div className='bannerColor1'>
            <img src={banner1} alt='banner' />
            <div className='text1'>
              <p>
                Teste da <br />
                <span>Delta</span>
              </p>
            </div>
            <div className='text2'>
              <p>
                Qual <br />
                <span className='text2Span'>teste</span> <br />
                <p>você quer fazer</p>
                <span className='text2Span2'>hoje?</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bannerColor2'>
            <img src={banner2} alt='banner' />
            <div className='slider2'>
              <p>
                Segundo <br />
                <span>Slider</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bannerColor3'>
            <img src={banner3} alt='banner' />
            <div className='slider3'>
              <p>
                Terceiro <br />
                <span>Slider</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
