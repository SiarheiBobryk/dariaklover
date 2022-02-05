import * as React from 'react';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Дарья Кловер {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
