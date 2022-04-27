import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  margin-top: 2rem;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 0.62rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide .bannerColor1 img,
  .swiper-slide .bannerColor2 img,
  .swiper-slide .bannerColor3 img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }

  .swiper-slide .bannerColor1 {
    background-color: #094f7c;
  }

  .swiper-slide .bannerColor2 {
    background-color: #edefbec2;
  }

  .swiper-slide .bannerColor3 {
    background-color: #aa0202c2;
  }

  .text1 {
    position: absolute;
    top: 20%;
    left: 7%;

    @media (max-width: 1610px) {
      display: none;
    }

    p {
      font-size: 3rem;
      color: #f5f5f5;
      text-align: start;
      line-height: 6rem;
      span {
        font-size: 7rem;
        font-weight: bold;
      }
    }
  }

  .text2 {
    position: absolute;
    top: 30%;
    right: 3%;

    @media (max-width: 1610px) {
      display: none;
    }

    p {
      font-size: 2.5rem;
      color: #ffffff;
      text-align: start;
      line-height: 3.5rem;
    }
  }

  .text2Span {
    font-size: 4rem;
    font-weight: bold;
    margin-left: 2.2rem;
  }

  .text2Span2 {
    font-size: 4rem;
    font-weight: bold;
    margin-left: 7.2rem;
  }

  .slider2 {
    position: absolute;
    top: 30%;
    left: 7%;

    @media (max-width: 1255px) {
      display: none;
    }

    p {
      font-size: 3rem;
      color: #ffffff;
      text-align: start;
      line-height: 5rem;

      span {
        font-size: 6rem;
        font-weight: bold;
      }
    }
  }

  .slider3 {
    position: absolute;
    top: 30%;
    left: 7%;

    @media (max-width: 1255px) {
      display: none;
    }

    p {
      font-size: 3rem;
      color: #ffffff;
      text-align: start;
      line-height: 5rem;

      span {
        font-size: 6rem;
        font-weight: bold;
      }
    }
  }
`;
