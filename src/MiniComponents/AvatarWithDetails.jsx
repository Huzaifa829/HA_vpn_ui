import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const AvatarWithDetails = ({ name, email }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt="Avatar" src="/path/to/avatar.png">
        <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <InsertDriveFileIcon style={{ color: 'green', fontSize: '1em' }} />
        </div>
      </Avatar>
      <div style={{ marginLeft: 10 }}>
        <Typography className='HA_avatar_subtile' variant="subtitle1">{name}</Typography>
        <Typography  className='HA_avatar_body'  variant="body2">{email}</Typography>
      </div>
      <p style={{ marginLeft: 'auto' }}>58.65MB</p>
    </div>
  );
};

export default AvatarWithDetails;
