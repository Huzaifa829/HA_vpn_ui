import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuDrawer from '../MiniComponents/MenuDrawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoImage from '../assests/images/Gradient - White Text@4x.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeButton, setActiveButton] = React.useState('signup');
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    // const getButtonStyles = (button) => {
    //     let styles = {
    //         color: activeButton === button ? 'white' : 'black',
    //     };

    //     if (activeButton === button) {
    //         styles.background = 'linear-gradient(90deg, rgba(111,239,130,1) 0%, rgba(25,162,119,1) 100%)';
    //         styles.borderRadius = '10px';
    //         // Add class for animation
    //         styles.animationName = 'shiny-btn1';
    //         styles.animationDuration = '3s';
    //         styles.animationTimingFunction = 'ease-in-out';
    //         styles.animationIterationCount = 'infinite';
            
    //     }

    //     return styles;
    // };
    // console.log(getButtonStyles('signup'), getButtonStyles('login'))

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'none' }}>
                <Toolbar>
                    <div className='HA_menu_icon_drawer'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuDrawer
                                menuItems={[
                                    { text: 'Inbox', icon: <InboxIcon />, link: '/inbox' },
                                    { text: 'Starred', icon: <MailIcon />, link: '/starred' },
                                    // Add more menu items as needed
                                ]}
                                dropdown={{
                                    label: 'Features',
                                    options: [
                                        { text: 'Option 1', link: '/option1' },
                                        { text: 'Option 2', link: '/option2' },
                                        { text: 'Option 3', link: '/option3' },
                                    ]
                                }}
                            />
                        </IconButton>
                    </div>
                    <Typography className='ha_logo_main_nav' variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={LogoImage} alt="Logo" width={150} />
                    </Typography>
                    <div className='HA_main_nav_menu_links'>
                        <Button className='HA_menu_btn' color="inherit"
                        >Overview</Button>
                        <Button
                            color="inherit"
                            aria-controls="link2-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            endIcon={anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            className='HA_menu_btn'
                        >
                            Features
                        </Button>
                        <Menu
                            id="link2-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Option 1</MenuItem>
                            <MenuItem onClick={handleClose}>Option 2</MenuItem>
                            <MenuItem onClick={handleClose}>Option 3</MenuItem>
                        </Menu>
                        <Button className='HA_menu_btn' color="inherit">Changelog</Button>
                        <Button className='HA_menu_btn' color="inherit">Pricing</Button>
                        <Button className='HA_menu_btn' color="inherit">Support</Button>
                    </div>
                    <div className='HA_main_rightSide_button'>
                        <Button
                            className={activeButton === 'login' ? 'HA_btn_11' : 'HA_btn_16'}
                            onClick={() => handleButtonClick('login')}
                        >
                            <span> Free Download</span>
                        </Button>
                        <Button
                          className={activeButton === 'signup' ? 'HA_btn_11' : 'HA_btn_16'}
                            onClick={() => handleButtonClick('signup')}
                        >
                            <span>Buy Pro</span>
                        </Button>
                        {/* <button class="HA_custom_btn HA_btn_11">Read More<div class="HA_dot"></div></button> */}
                    </div>
                    <div className='HA_mobile_v_rightSide_button'>
                        <Button

                            aria-controls="dropdown-menu"
                            aria-haspopup="true"
                            onClick={handleClick2}
                            // style={getButtonStyles()}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                        <Menu
                            id="dropdown-menu"
                            anchorEl={anchorEl2}
                            open={Boolean(anchorEl2)}
                            onClose={handleClose2}
                        >
                            <MenuItem  className={activeButton === 'login' ? 'HA_btn_11' : 'HA_btn_16'} onClick={() => { handleButtonClick('login'); handleClose(); }}>
                                Free Download
                            </MenuItem>
                            <MenuItem className={activeButton === 'signup' ? 'HA_btn_11' : 'HA_btn_16'} onClick={() => { handleButtonClick('signup'); handleClose(); }}>
                                Buy Pro
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
