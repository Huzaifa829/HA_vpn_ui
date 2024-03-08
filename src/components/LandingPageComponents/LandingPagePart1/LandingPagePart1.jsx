import { Button } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./app.css"

const LandingPagePart1 = () => {
  return (
    <div className='HA_LandingPagePart1_main'>
      <div className='HA_2_btn_landing'>
        <Button className='HA_2_btn_landing1' startIcon={<FiberManualRecordIcon style={{ fontSize: '14px' }} />}>
          Changelog
        </Button>
        <button className="HA_2_btn_landing2">
          Check out real-time updates
          <ArrowForwardIcon className="HA_2_btn_landing2_icon" />
        </button>
      </div>
      <p className='HA_text1'>Stay <span className='HA_text2'>Protected</span></p>
      <p className='HA_text1'>with AtomicVPN</p>
      <p className='HA_text3'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      <Button
        className='HA_btn_11'

      >
       Download App
      </Button>
    </div>
  )
}

export default LandingPagePart1
