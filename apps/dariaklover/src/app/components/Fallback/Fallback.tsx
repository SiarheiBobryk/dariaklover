import * as React from 'react';

import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function Fallback() {
  return (
    <>
      <Typography variant="h4" component="h1">
        <Skeleton width="60%" />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={50} />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={70} />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={40} />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={100} />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={140} />
      </Typography>
      <Typography>
        <Skeleton variant="rectangular" height={60} />
      </Typography>
    </>
  );
}

export default Fallback;
