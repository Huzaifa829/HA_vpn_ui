import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assests/images/Frame 48 (9).png';

const MyCarousel = ({ data }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div style={{ width: '90%', maxWidth: '1500px',marginTop:'100px' }}>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='HA_MyCarousel_main_conternar'>
                        <img style={{marginLeft:'20px'}} src={img1} alt="" />
                        <p style={{marginLeft:'20px'}}  className='HA_MyCarousel_main_conternar_heading'>
                            {item.heading}
                        </p>
                        <p style={{marginLeft:'20px'}}  className='HA_MyCarousel_main_conternar_para'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MyCarousel;
