import React from 'react'
import img1 from '../assests/images/Gradient - White Text@4x.png'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import img2 from '../assests/images/Mobile app store badge (2).png'
import img3 from '../assests/images/Mobile app store badge (3).png'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const HA_Footer = () => {
    return (
        <div className='HA_Footer_main'>
            <div className='HA_Footer_main_child'>
                <div className='HA_Footer_main_child1'>
                    <div className='HA_Footer_main_child1_part1'>
                        <img width={144.79} src={img1} alt="" />
                        <p className='HA_Footer_main_child1_part1_des'>
                            Keep in touch with all our updates by subscribing to our newsletter.
                        </p>
                        <TextField
                            label="Enter Your Email"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#EDEFF3', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#19A277', // Border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#19A277', // Border color on focus
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: '#EDEFF3', // Text color
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#EDEFF3', // Placeholder color
                                },
                                '& .MuiSvgIcon-root': {
                                    color: '#EDEFF3', // Icon color
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <EastIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>
                    <div className='HA_Footer_main_child1_2'>
                        <ul>
                            <li className='HA_Footer_main_child1_menu_header'>
                                Product
                            </li>
                            <li className='HA_Footer_main_child1_menu_title'>
                                Overview
                            </li>
                            <li className='HA_Footer_main_child1_menu_title'>Features</li>
                            <li className='HA_Footer_main_child1_menu_title'>Updates
                                <span>
                                    <button className='HA_Footer_main_child1_menu_title_btn'>
                                        New
                                    </button>
                                </span>
                            </li>
                            <li className='HA_Footer_main_child1_menu_title'>Pricing</li>
                        </ul>
                        <ul>
                            <li className='HA_Footer_main_child1_menu_header'>
                                Company
                            </li>
                            <li className='HA_Footer_main_child1_menu_title'>
                                About us
                            </li>
                            <li className='HA_Footer_main_child1_menu_title'>Careers</li>

                            <li className='HA_Footer_main_child1_menu_title'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='HA_Footer_main_child1 HA_Footer_main_child1_margin'>
                    <div>
                        <img width={144} src={img2} alt="" />
                        <img width={124} src={img3} alt="" />
                    </div>
                    <div className='HA_footer_icon_main'>
                        <GitHubIcon style={{ color: '#475467', fontSize: '22px' }} />
                        <XIcon style={{ color: '#475467', fontSize: '22px' }} />
                    </div>
                </div>
                <div className='HA_Footer_main_child1 HA_Footer_main_child1_link_margin'>
                    <div>
                        <p className='HA_footer_year_mark'>© 2024 AtomicVPN. All rights reserved.</p>
                    </div>
                    <div className='HA_footer_links_main'>
                        <span className='HA_footer_year_mark_links'>Terms</span>
                        <span className='HA_footer_year_mark_links'>Privacy</span>
                        <span className='HA_footer_year_mark_links'>Cookies</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HA_Footer
