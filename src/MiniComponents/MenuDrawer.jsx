import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LogoImage from '../assests/images/Gradient - White Text@4x.png'

export default function MenuDrawer({ menuItems, dropdown }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', p: 2 }}>
        <img src={LogoImage} alt="" width={100} />
      </Box>
      <List onClick={stopPropagation}>
        {menuItems.map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={link}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {dropdown && (
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={dropdown.label} />
              {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </ListItemButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {dropdown.options.map(({ text, link }) => (
                <MenuItem key={text} onClick={handleClose} component="a" href={link}>
                  {text}
                </MenuItem>
              ))}
            </Menu>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon style={{ color: '#475467' }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
