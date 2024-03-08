import { Skeleton } from '@mui/material'
import React from 'react'
import img1 from "../assests/images/Frame 48 (8).png"

const Card1 = () => {
  return (
    <div className='HA_inner_part1_main_part' style={{ border: '1px solid #EDEFF3', padding: '24px 0px', paddingBottom: '50px', borderRadius: '15px' }}>
      <div className='HA_inner_part1_main_part_Skeleton' style={{ paddingLeft: '15px' }}>
        <Skeleton style={{ marginBottom: '10px' }} width={250} height={15} />
        <Skeleton style={{ marginBottom: '100px' }} width={150} height={15} />
      </div>
      <div className='HA_inner_part1'>

        <div className='HA_inner_part2'>
          <div className='HA_inner_part3'>
            <img style={{ width: '100%', height: '100%' }} src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1

