// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import swiperBack from '../img/swiperBack.svg';
import img_water from '../img/img_water.png';
import img_organic from '../img/img_organic.png';
import img_trees from '../img/img_trees.png';
import img_plastic from '../img/img_plastic.png';
import img_energy from '../img/img_energy.png';


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      navigation
      pagination={{ clickable: true, type:'fraction'}}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1639: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 4,
        },
        922: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <div className="swiperBack__wrapper">
        <div className="swiperBack__active">
            <img src={swiperBack} alt="swiperBack" className="swiperBack" />
            <img src={swiperBack} alt="swiperBack__background " className="swiperBack__background" />
            <div className="swiperBack__description">
                <h2 className="swiperBack__title">Save watter</h2>
                <p className="swiperBack__text">Taking on the issue of ensuring access to safe water requires worldwide effort.</p>
            </div>
        </div>
        <div className="swiperBack__nonActive">
            <img src={img_water} alt="swiperBack" className="swiperBack__img-nonActive" />
            <span className="swiperBack__span">Save watter</span>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperBack__wrapper">
        <div className="swiperBack__active">
            <img src={swiperBack} alt="swiperBack" className="swiperBack" />
            <img src={swiperBack} alt="swiperBack__background " className="swiperBack__background" />
            <div className="swiperBack__description">
                <h2 className="swiperBack__title">Plant trees</h2>
                <p className="swiperBack__text">Taking on the issue of ensuring access to safe water requires worldwide effort.</p>
            </div>
        </div>
        <div className="swiperBack__nonActive">
            <img src={img_trees} alt="swiperBack" className="swiperBack__img-nonActive" />
            <span className="swiperBack__span">Plant trees</span>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperBack__wrapper">
        <div className="swiperBack__active">
            <img src={swiperBack} alt="swiperBack" className="swiperBack" />
            <img src={swiperBack} alt="swiperBack__background " className="swiperBack__background" />
            <div className="swiperBack__description">
                <h2 className="swiperBack__title">Avoid plastic</h2>
                <p className="swiperBack__text">Taking on the issue of ensuring access to safe water requires worldwide effort.</p>
            </div>
        </div>
        <div className="swiperBack__nonActive">
            <img src={img_plastic} alt="swiperBack" className="swiperBack__img-nonActive" />
            <span className="swiperBack__span">Avoid plastic</span>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperBack__wrapper">
        <div className="swiperBack__active">
            <img src={swiperBack} alt="swiperBack" className="swiperBack" />
            <img src={swiperBack} alt="swiperBack__background " className="swiperBack__background" />
            <div className="swiperBack__description">
                <h2 className="swiperBack__title">Save energy</h2>
                <p className="swiperBack__text">Taking on the issue of ensuring access to safe water requires worldwide effort.</p>
            </div>
        </div>
        <div className="swiperBack__nonActive">
            <img src={img_energy} alt="swiperBack" className="swiperBack__img-nonActive" />
            <span className="swiperBack__span">Save energy</span>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperBack__wrapper">
        <div className="swiperBack__active">
            <img src={swiperBack} alt="swiperBack" className="swiperBack" />
            <img src={swiperBack} alt="swiperBack__background " className="swiperBack__background" />
            <div className="swiperBack__description">
                <h2 className="swiperBack__title">Choose organic</h2>
                <p className="swiperBack__text">Taking on the issue of ensuring access to safe water requires worldwide effort.</p>
            </div>
        </div>
        <div className="swiperBack__nonActive">
            <img src={img_organic} alt="swiperBack" className="swiperBack__img-nonActive" />
            <span className="swiperBack__span">Choose organic</span>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};