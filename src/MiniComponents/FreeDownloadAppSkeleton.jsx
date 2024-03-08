import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

const FreeDownloadAppSkeleton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',padding:'0px',width:'100%' }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ marginLeft: 10 }}>
        <Skeleton width={200} height={20} />
        <Skeleton width={100} height={20} />
      </div>
    </div>
  );
};

export default FreeDownloadAppSkeleton;
