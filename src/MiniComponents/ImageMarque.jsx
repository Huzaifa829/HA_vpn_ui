import React from 'react';
import Marquee from 'react-fast-marquee';
import image1 from '../assests/images/Black Transparency Text@4x.png'; 
import image2 from '../assests/images/Company logo (1).png'; 
import image3 from '../assests/images/Company logo (2).png'; 
import image4 from '../assests/images/Company logo (3).png'; 
import image5 from '../assests/images/Company logo (4).png'; 
import image6 from '../assests/images/Company logo (5).png'; 

const ImageMarquee = () => {
  return (
    <Marquee>
         {/* <img src={image1} className='HA_image_marquee' alt="Image 1" /> */}
         <img src={image2} className='HA_image_marquee' alt="Image 1" />
         <img src={image5} className='HA_image_marquee' alt="Image 1" />
         <img src={image3} className='HA_image_marquee' alt="Image 1" />
         <img src={image4} className='HA_image_marquee' alt="Image 1" />
         <img src={image5} className='HA_image_marquee' alt="Image 1" />
         <img src={image6} className='HA_image_marquee' alt="Image 1" />
         <img src={image4} className='HA_image_marquee' alt="Image 1" />
         {/* <img src={image1} className='HA_image_marquee' alt="Image 1" /> */}
    
      {/* Add more images as needed */}
    </Marquee>
  );
};

export default ImageMarquee;
