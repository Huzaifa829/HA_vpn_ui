import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Button from '@mui/material/Button';
import ImageIcon from '../assests/images/Hand (1).png';

const FreeDownloadApp = ({ name, email,imgAvatar }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
     <Avatar alt="Avatar" src={imgAvatar} variant="square">
      </Avatar>
      <div style={{ marginLeft: 10 }}>
        <Typography className='HA_avatar_subtile' variant="subtitle1">{name}</Typography>
        <Typography className='HA_avatar_body' variant="body2">{email}</Typography>
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          marginLeft: 'auto',
          color: '#00A573',
          border: '1px solid #00A573',
          background: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        Free Download
        <img src={ImageIcon} alt="icon" style={{ position: 'absolute', bottom: -10, right: -5, width: 20, height: 20 }} />
      </Button>
    </div>
  );
};

export default FreeDownloadApp;
