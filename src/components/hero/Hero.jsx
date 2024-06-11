import { HeroData } from "./HeroData";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/banner/banner-bg.png"
        alt="banner-bg-image"
        className="hero-bg-img"
      />
      <div className="wrapper">
        <Swiper
          spaceBetween={30}
          loop={true}
          speed={900}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {HeroData.map((item) => {
            let { id, img, title, btnTxt } = item;

            return (
              <SwiperSlide key={id}>
                <div className="swiper-item">
                  <img src={img} alt="hero-image" />

                  <div className="hero-item-detail">
                    <h2 className="hero-title"> {title} </h2>
                    <a href="#" className="hero-btn primary-btn">
                      {btnTxt}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
