import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousals.css';

const Carousals = () => {
    const settings = {
      infinite: true,  
      speed: 500,  
      slidesToShow: 2,  
      slidesToScroll: 1,  
      arrows: true, 
      dots: false,  
      responsive: [
        {
          breakpoint: 200,  
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,  
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Bkirthday_Desk_copy_02-04-2025.jpg" alt="Slide 1" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Navratri_Desk-bnr-29-03.jpg" alt="Slide 2" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Hatke-i_Homepage-Banner_NEW-UI-25-03-2025.jpg" alt="Slide 3" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Luxe_HomepageBanner_Desk_140125.jpg" alt="Slide 4" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Plants_Homepage_Banner_Desk_07-03-2025.jpg" alt="Slide 5" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Flowers_Homepage_Banner_Desk_07-03-2025.jpg" alt="Slide 6" /></div>
          <div><img src="https://www.fnp.com/assets/images/custom/new-home-2025/hero-banners/Back_to_school_Desk_02-04-25.jpg" alt="Slide 7" /></div>
        </Slider>
      </div>
    );
  };
  
  export default Carousals;