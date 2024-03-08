import React from 'react';
import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import img1 from '../assests/images/Check icon (1).png';

const PlanCards = ({ price, isPopular, features, buttonText, showMonthText, billedAnnuallyText, planText }) => {
    return (
        <div className='HA_PlanCards_main_div'>
            <div className='HA_PlanCards_main_div_child1'>
                <p className='HA_PlanCards_main_div_child1_heading'>{price}{showMonthText && <span className='HA_PlanCards_main_div_child1_heading2'>/month</span>}</p>
                {isPopular && (
                    <Button className='HA_2_btn_landing6' startIcon={<FiberManualRecordIcon style={{ fontSize: '1.2rem' }} />}>
                        Popular
                    </Button>
                )}
            </div>
            <p className='HA_PlanCards_main_div_child1_des'>{planText} <span className='HA_PlanCards_main_div_child1_des2'>{billedAnnuallyText}</span></p>
            <div style={{ padding: '60px 0px' }}>
                {features.map((feature, index) => (
                    <div className='HA_PlanCards_main_div_child1_1' key={index}>
                        <img src={img1} alt="" />
                        <p className='HA_PlanCards_main_div_child1_1_text'>{feature}</p>
                    </div>
                ))}
            </div>
            <button className='HA_PlanCards_main_div_child1_1_btn'>
                {buttonText}
            </button>
        </div>
    );
};

export default PlanCards;
    