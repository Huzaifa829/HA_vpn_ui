import React from 'react'
import './app.css'
import Skeleton from '@mui/material/Skeleton';
import AvatarWithDetails from '../../../MiniComponents/AvatarWithDetails';
import LinearWithValueLabel from '../../../MiniComponents/LinearProgressWithLabel';
import FreeDownloadApp from '../../../MiniComponents/FreeDownloadApp';
import avatarImage from '../../../assests/images/Icon (1).png';
import videoImage from '../../../assests/images/Frame 48 (6).png';
import FreeDownloadAppSkeleton from '../../../MiniComponents/FreeDownloadAppSkeleton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card1 from '../../../MiniComponents/Card1';
import BasicGrid from '../../../MiniComponents/GridPart3';
import GridPart4 from '../../../MiniComponents/GridPart4';


const LandingPagePart3 = () => {
    return (
        <div className='HA_LandingPagePart3_main'>
            <div className='HA_LandingPagePart3_text_main'>
                <p className='HA_LandingPagePart3_text1'>Atomic features</p>
                <p className='HA_LandingPagePart3_text2'>Here’s a quick overview of our main features and what we have to offer. For more in-depth reviews, browse around our website.</p>
            </div>
            <div className='HA_LandingPagePart3_section2'>
                <div className='grid-item grid_item1_bg'>
                    <p className='HA_grid_part1'>Multiple Free servers with Fast connection</p>
                    <p className='HA_grid_part1_d'>ccess multiple free servers effortlessly. Enjoy fast connections with no paywall for instant downloads. P2P and torrenting made easy.</p>
                </div>
                <div className='grid-item grid_item1_bg2'>
                    <p className='HA_grid_part1'>Multiple Encryption protocol,Wire guard and other</p>
                    <p className='HA_grid_part1_d'>Activate the kill switch feature for added security. Say goodbye to ads with our built-in ad blocker.</p>
                </div>
            </div>
            <div className='HA_2-container'>
                <div className='HA_2-grid-item'>
                    <p className='HA_grid_part2'>P2P & torrenting</p>
                    <p className='HA_grid_part2_d'>Say goodbye to ads with our built-in ad blocker. Get instant in-app assistance.</p>
                    <Skeleton style={{marginBottom:'20px'}} width={210} />
                    <div className='HA_main_AvatarWithDetails'>
                    <AvatarWithDetails name="Project_Files.zip" email="from Andrew" />
                    {/* <LinearProgressWithLabel value={progress} /> */}
                    <LinearWithValueLabel value={100}/>

                    </div>
                </div>
                <div className='HA_2-grid-item HA_grid_part3_main'>
                <p className='HA_grid_part3 HA_grid_part3_margin '>No paywall</p>
                <p className='HA_grid_part3 HA_grid_part3_top'>download and direct use</p>
                <div className='HA_grid_part3_FreeDownloadApp'>
                <FreeDownloadApp imgAvatar={avatarImage} name="AtomicVPN" email="58.65MB" />
                </div>
                <p className='HA_grid_part3_FreeDownloadApp_des'>Stay secure with multiple encryption protocols. Optimize servers for streaming and gaming for the ultimate experience.</p>
                </div>
                <div style={{overflow:'hidden'}} className='HA_2-grid-item HA_2-span-2'>
                    <p className='HA_grid_part4_heading'>Kill Switch feature</p>
                    <Card1/>
                    <p className='HA_grid_part5_desc'>Activate the Kill Switch for</p>
                    <p className='HA_grid_part5_desc'>added security measures.</p>

                </div>
                <div className='HA_2-grid-item HA_2_span_4'>
                    <div className='HA_grid_part4_main'>
                        <p className='HA_grid_part4_heading'>Optimize server for Streaming & Gaming</p>
                        <p className='HA_grid_part4_des'>Activate the kill switch feature for added security. Say goodbye to ads with our built-in ad blocker.</p>
                    </div>
                    <div className='HA_grid_part4_part2'>
                       <FreeDownloadAppSkeleton/>
                       <div className='HA_grid_part4_part2_video_image'>
                        <img src={videoImage} alt="" />
                       </div>
                       <div className='HA_grid_part4_part2_video_btn'>
                       <PlayArrowIcon style={{ fontSize: '4rem',color:'#00A573' }} />
                        <Skeleton width="100%" height={20} />
                       </div>
                    </div>
                </div>
            </div>
            <BasicGrid/>
            <GridPart4/>
        </div>
    )
}

export default LandingPagePart3
