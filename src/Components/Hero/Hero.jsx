import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay} from "swiper/modules";
import slide1 from "../../assets/sarah-hopt-1YspLx0YhbE-unsplash.jpg";
import slide2 from "../../assets/25496.jpg";
import slide3 from "../../assets/2147888797.jpg";
import slide4 from "../../assets/natalia-gusakova-anUg526qras-unsplash.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slide1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slide2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slide3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover object-center"
              src={slide4}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-linear-to-r from-[#D89A50]/70 to-[#795995]/70 absolute inset-0 z-10 flex flex-col gap-4 justify-center items-center text-white text-center px-4">
      <h1 className="text-4xl font-bold">Keep Your Pets Warm This Winter</h1>
        <p>
          Explore cozy clothing, expert grooming, and winter care tips to ensure your furry friends stay happy and healthy all season.
        </p>
        <Link to={"/services"} className="btn btn-primary hover:bg-secondary border-none mt-4">Explore Services</Link>
      </div>
    </div>
  );
};

export default Hero;
