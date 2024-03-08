import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import img1 from '../assests/images/xx (1).png'
import img2 from '../assests/images/phone image.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        // <Box sx={{marginTop: '20px' }}>
        // <Grid maxWidth={1500} width='100%' container spacing={2}>
        <div className='HA_basicGrid_main_parent' style={{ display: 'flex', maxWidth: '1500px', gap: '10px' }}>
            {/* <Grid xs={5}> */}
            <div className='HA_basicGrid_main_parent_child'>
                <div className='HA_basicGrid_main'>
                    <div className='HA_basicGrid_part1'>
                        <div className='HA_basicGrid_part2'>
                            <div className='HA_basicGrid_part3'>
                                <img style={{ width: '100%', height: '100%' }} src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='HA_basicGrid_main2'>
                        <p className='HA_basicGrid_main2_heading'>Ad blocker</p>
                        <p className='HA_basicGrid_main2_des'>Say goodbye to ads with our built-in ad blocker for your browser.</p>
                    </div>
                </div>
            </div>
            {/* </Grid> */}
            {/* <Grid xs={7}> */}
            <div className='HA_basicGrid_main_parent_child2'>
                <div className='HA_basicGrid_main3'>
                    <div className='HA_basicGrid_main3_part1'>
                        <p className='HA_basicGrid_main3_part1_heading'>In app customer support, with messaging panel</p>
                        <p className='HA_basicGrid_main3_part1_des'>Activate the kill switch feature for added security. Say goodbye to ads with our built-in ad blocker. Get instant in-app support via messaging.</p>
                    </div>
                    <div className='HA_basicGrid_main3_part2'>
                        <img style={{ width: '100%', height: '400px' }} src={img2} alt="" />
                    </div>
                </div>
            </div>
            {/* </Grid> */}
        </div>
        // </Grid>
        // </Box>
    );
}