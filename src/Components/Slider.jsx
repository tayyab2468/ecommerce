import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
