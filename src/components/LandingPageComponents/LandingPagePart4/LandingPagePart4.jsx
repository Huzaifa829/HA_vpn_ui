import React from 'react'
import './app.css'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import { Button } from '@mui/material'
import img1 from '../../../assests/images/Frame 48 (9).png'
import MyCarousel from '../../../MiniComponents/MyCarousel';
// import SwipeableTextMobileStepper from '../../../MiniComponents/MyCarousel';


const LandingPagePart4 = () => {
  const carouselData = [
    {
        heading: 'Business Use',
        description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
    },
    {
        heading: 'Business Use',
        description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
    },
    {
        heading: 'Business Use',
        description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
    },
    {
        heading: 'Business Use',
        description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
    },
    {
        heading: 'Business Use',
        description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
    },
      {
          heading: 'Business Use',
          description: 'Discover how our product can enhance your business operations. Learn more about our enterprise solutions.'
      },
    // Add more data objects as needed
];
  return (
    <div className='HA_LandingPagePart4_main'>
      <div className='HA_LandingPagePart4_main_child'>
        <p className='HA_LandingPagePart4_main_heading'>Why do you need a VPN?</p>
      <div className='HA_LandingPagePart4_main2'>
        <div className='HA_LandingPagePart4_main2_child1'>
        <p className='HA_LandingPagePart4_main2_des'>Here’s a quick overview of our <span style={{color:'#00A573'}}> main features </span>and what we have to offer. For more in-depth reviews, browse around our website.</p>
        </div>
        <div className='HA_LandingPagePart4_main2_child2'>
        <Button style={{color:'#00A573',fontSize:'1.4rem',fontWeight:'600'}} endIcon={<TrendingFlatIcon />}>
                Learn More
                </Button>
        </div>
      </div>
      </div>
      {/* <HAMyCarousel items={carouselItems} /> */}
     {/* <SwipeableTextMobileStepper items={images} /> */}
     <MyCarousel data={carouselData} />
    </div>
  )
}

export default LandingPagePart4
