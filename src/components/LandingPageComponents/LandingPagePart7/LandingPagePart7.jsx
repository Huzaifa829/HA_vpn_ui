import React from 'react'
import './app.css'
import { Button } from '@mui/material'
import CardDetailLanding7 from '../../../MiniComponents/CardDetailLanding7'

const LandingPagePart7 = () => {
    return (
        <div className='HA_LandingPagePart7_main_contenair'>
            <div className='HA_LandingPagePart4_main_child'>
                <p className='HA_LandingPagePart4_main_heading'>Frequently asked questions</p>
                <div className='HA_LandingPagePart4_main2'>
                    <div className='HA_LandingPagePart4_main2_child1'>
                        <p className='HA_LandingPagePart4_main2_des'>Discover our pricing plans and <span style={{ color: '#00A573' }}> find the perfect fit </span> for your needs. Explore our website for detailed information and comparisons.</p>
                    </div>
                    <div className='HA_LandingPagePart4_main2_child2'>

                    </div>
                </div>
            </div>
            <div className='HA_LandingPagePart7_main_contenair_child'>
                <CardDetailLanding7
                    heading="Is there a free trial available?"
                    paragraph="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                />
                <CardDetailLanding7
                    heading="Can I change my plan later?"
                    paragraph="Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
                />
                <CardDetailLanding7
                    heading="What is your cancellation policy?"
                    paragraph="We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."
                />
                <CardDetailLanding7
                    heading="Can other info be added to an invoice?"
                    paragraph="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                />
                <CardDetailLanding7
                    heading="How does billing work?"
                    paragraph="Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
                />
                <CardDetailLanding7
                    heading="How do I change my account email?"
                    paragraph="You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop."
                />
            </div>
            <div className='HA_LandingPagePart7_main_contenair_child2'>
                <div>
                    <p className='HA_LandingPagePart7_main_contenair_child2_heading'>Still have questions?</p>
                    <p className='HA_LandingPagePart7_main_contenair_child2_para'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <button className='HA_LandingPagePart7_main_contenair_child2_btn_HA'>
                    Get in touch
                </button>
            </div>
        </div>
    )
}

export default LandingPagePart7
