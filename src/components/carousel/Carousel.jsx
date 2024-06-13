import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CarouselData } from "./CarouselData";
import "./carousel.css";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="wrapper">
        <Swiper
          slidesPerView={2}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4567,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {CarouselData.map((item) => {
            let { id, img } = item;

            return (
              <SwiperSlide key={id}>
                <img src={img} alt="carousel-image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
