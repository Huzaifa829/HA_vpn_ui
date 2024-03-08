import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './app.css'

import { Button } from '@mui/material'
import PlanCards from '../../../MiniComponents/PlanCards';
import MyCarousel2 from '../../../MiniComponents/MyCarousel2';
// import img1 from '../../../assests/images/Frame 48 (9).png'
import img1 from '../../../assests/images/Icon (2).png';
import img2 from '../../../assests/images/Avatar.png';

const LandingPagePart6 = () => {
  const carouselData = [
    {
        image: img1,
        review: "Using AtomicVPN has been a game-changer for me. It's effortless and efficient, and I couldn't be happier with the results. Highly recommended!",
        avatar: img2,
        name: 'Dave Jones',
        title: 'Future Intranet Administrator'
    },
    {
        image: img1,
        review: "Using AtomicVPN has been a game-changer for me. It's effortless and efficient, and I couldn't be happier with the results. Highly recommended!",
        avatar: img2,
        name: 'Dave Jones',
        title: 'Future Intranet Administrator'
    },
    {
        image: img1,
        review: "Using AtomicVPN has been a game-changer for me. It's effortless and efficient, and I couldn't be happier with the results. Highly recommended!",
        avatar: img2,
        name: 'Dave Jones',
        title: 'Future Intranet Administrator'
    },
    {
        image: img1,
        review: "Using AtomicVPN has been a game-changer for me. It's effortless and efficient, and I couldn't be happier with the results. Highly recommended!",
        avatar: img2,
        name: 'Dave Jones',
        title: 'Future Intranet Administrator'
    },
    // Add more data objects as needed
];
  const planFeatures = [
    'Access to all basic features',
    'Basic reporting and analytics',
    '20GB individual data each user',
    'Basic chat and email support',
  ];
  return (
    <div className='HA_LandingPagePart6_main_conternar'>
      <div className='HA_LandingPagePart4_main_child'>
        <p className='HA_LandingPagePart4_main_heading'>Subscription plans</p>
        <div className='HA_LandingPagePart4_main2'>
          <div className='HA_LandingPagePart4_main2_child1'>
            <p className='HA_LandingPagePart4_main2_des'>Discover our pricing plans and <span style={{ color: '#00A573' }}> find the perfect fit </span> for your needs. Explore our website for detailed information and comparisons.</p>
          </div>
          <div className='HA_LandingPagePart4_main2_child2'>
            <Button style={{ color: '#00A573', fontSize: '1.4rem', fontWeight: '600' }} endIcon={<TrendingFlatIcon />}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className='HA_LandingPagePart4_main2_child2_plan_main'>
        <PlanCards
          price="Free"
          isPopular={false}
          features={planFeatures}
          buttonText="Get started for free"
          billedAnnuallyText="free registration"
          planText="Basic Plan"
        />
        <PlanCards
          price="$2.99"
          isPopular={true}
          features={planFeatures}
          buttonText="Buy Now"
          showMonthText={true}
          billedAnnuallyText="billed annually."
          planText="Pro Plan"
        />
        <PlanCards
          price="$10.59"
          isPopular={false}
          features={planFeatures}
          buttonText="Buy Enterprise"
          showMonthText={true}
          billedAnnuallyText="billed annually."
          planText="Enterprise Plan"
        />
      </div>
      <div className='HA_LandingPagePart4_main_child'>
        <p className='HA_LandingPagePart4_main_heading'>What our users say about us</p>
        <div className='HA_LandingPagePart4_main2'>
          <div className='HA_LandingPagePart4_main2_child1'>
            <p className='HA_LandingPagePart4_main2_des'>Discover our pricing plans and <span style={{ color: '#00A573' }}> find the perfect fit </span> for your needs. Explore our website for detailed information and comparisons.</p>
          </div>
          <div className='HA_LandingPagePart4_main2_child2'>
            <Button style={{ color: '#00A573', fontSize: '1.4rem', fontWeight: '600' }} >
            View All
            </Button>
          </div>
        </div>
      </div>
      <MyCarousel2 data={carouselData} />
    </div>
  )
}

export default LandingPagePart6
