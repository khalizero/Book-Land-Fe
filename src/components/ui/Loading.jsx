import React from 'react';
import { CircularProgress } from '@mui/material';


const Loading = () => {
  return (
    <CircularProgress size={'50px'} sx={{margin:'auto', display: 'block'}}/> 
  );
}

export default Loading;