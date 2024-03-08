import React from 'react'
import './app.css'
import img1 from '../../../assests/images/Mobile app store badge (1).png'
import img2 from '../../../assests/images/Mobile app store badge.png'

const LandingPagePart8 = () => {
    return (
        <div className='HA_LandingPagePart8_main_contenair'>
            <div className='HA_LandingPagePart8_main_contenair_child'>
                <div className='HA_LandingPagePart8_main_contenair_child_1'>
                    <p className='HA_LandingPagePart8_main_contenair_child_1_heading'>
                        Try AtomicVPN today risk free with a <span className='HA_LandingPagePart8_main_contenair_child_1_heading2'>
                            free account</span>
                    </p>
                    <p className='HA_LandingPagePart8_main_contenair_child_1_para'>
                        Here’s a quick overview of our <span className='HA_LandingPagePart8_main_contenair_child_1_para2'> main features </span>
                         and what we have to offer.
                        For more in-depth reviews, browse around our website.
                    </p>
                    <div>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPagePart8
