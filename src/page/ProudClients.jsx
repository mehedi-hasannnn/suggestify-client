import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/product/bikroi.png';
import img2 from '../assets/product/chaldal.jpg';
import img3 from '../assets/product/Daraz.png';
import img4 from '../assets/product/evely.png';
import img5 from '../assets/product/Rokomari.png';
import img6 from '../assets/product/ryans.jpg';
import img7 from '../assets/product/shwapno.jpg';

import boycottimg from '../assets/product/boycott.png';
import boycottimg2 from '../assets/product/boycott2.jpeg';
import boycottimg3 from '../assets/product/boycott3.jpeg';

const ProudClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Local Economy Section */}
      <h2 className="text-3xl font-extrabold text-center mb-5 mt-10 text-violet-500 dark:text-violet-400">
        Promote Local Economy - Power Up Our Deshi Market
      </h2>
      <div className="slider-container py-10">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Bikroy" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img2} alt="Chaldal" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img3} alt="Daraz" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img4} alt="Evaly" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img5} alt="Rokomari" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img6} alt="Ryans" className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </div>
          <div>
            <img src={img7} alt="Shwapno" className="w-24 h-24 md:w-36 md:h-36 mx-auto" />
          </div>
        </Slider>
      </div>

      {/* Boycott Israel Section */}
      <h2 className="text-3xl font-extrabold text-center mb-5 mt-10 text-red-600 dark:text-red-400">
        Boycott Israeli Products – Stand for Justice
      </h2>
      <div className="slider-container py-10">
        <Slider {...settings}>
          <div>
            <img src={boycottimg} alt="Boycott 1" className="w-52 h-52 md:w-64 md:h-64 object-contain mx-auto" />
          </div>
          <div>
            <img src={boycottimg2} alt="Boycott 2" className="w-52 h-52 md:w-64 md:h-64 object-contain mx-auto" />
          </div>
          <div>
            <img src={boycottimg3} alt="Boycott 3" className="w-52 h-52 md:w-64 md:h-64 object-contain mx-auto" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ProudClients;
