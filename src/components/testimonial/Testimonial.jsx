import { TestimonialData } from "./TestimonialData";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial section-spacing">
      <div className="wrapper">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {TestimonialData.map((item) => {
            let { id, testimonial, user, address } = item;

            return (
              <SwiperSlide key={id}>
                <div className="testimonial-item">
                  <FaQuoteLeft />
                  <p className="testimonial-desc">{testimonial}</p>
                  <span>
                    {user}, {address}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </section>
  );
};

export default Testimonial;
