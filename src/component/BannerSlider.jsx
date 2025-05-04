// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/bgimage/image1.jpg';
import bgimg2 from '../assets/bgimage/image2.webp';
import bgimg3 from '../assets/bgimage/image3.jpg';

const BannerSlider = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Your Next Favorite Product is Just a Click Away"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Discover What Fits You Best – Personalized Recommendations, Smarter Choices"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Say Goodbye to Endless Searching — We Recommend, You Choose."
          />
        </SwiperSlide>
      </Swiper>

      {/* Trending Queries Heading */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-extrabold text-violet-500">
          🔥 Trending Queries 🔥
        </h2>
        <p className="text-violet-400 mt-1">
          Discover the most recommended products from our community.
        </p>
      </div>
    </div>
  );
};

export default BannerSlider;
