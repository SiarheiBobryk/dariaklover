import * as React from 'react';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary" align="center">
      Дарья Кловер {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
