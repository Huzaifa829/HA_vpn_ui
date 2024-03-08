import { Button } from '@mui/material'
import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const GridPart4 = () => {
    return (
        <div className='HA_grid_part4_next'>
            <div className='HA_grid_part4_next_part1_main'>
                <p className='HA_grid_part4_next_heading'>8x Features</p>
            </div>
            <div className='HA_grid_part4_next_part1_main2'>
                <p className='HA_grid_part4_next_part1_main2_heading'>Rest assured knowing your digital assets are fortified against cyber threats from every angle, providing you with peace of mind in an increasingly interconnected world.</p>
                <Button style={{color:'#00A573',fontSize:'1.4rem',fontWeight:'600'}} endIcon={<TrendingFlatIcon />}>
                Learn More
                </Button>
            </div>
        </div>
    )
}

export default GridPart4
