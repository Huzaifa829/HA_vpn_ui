import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assests/images/Icon (2).png';
import img2 from '../assests/images/Avatar.png';

const MyCarousel2 = ({ data }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    slidesToScroll: 2
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
        <div style={{ width: '90%', maxWidth: '1500px', marginTop: '100px' }}>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className='HA_MyCarousel2_main_conternar'>
                        <img className='HA_MyCarousel2_main_conternar_img' src={item.image} alt="" />
                        <p className='HA_MyCarousel2_main_conternar_para'>{item.review}</p>
                        <div className='HA_MyCarousel2_main_conternar_child'>
                            <img src={item.avatar} alt="" />
                            <div>
                                <p className='HA_MyCarousel2_main_conternar_ava_name'>{item.name}</p>
                                <p className='HA_MyCarousel2_main_conternar_ava_title'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MyCarousel2;
