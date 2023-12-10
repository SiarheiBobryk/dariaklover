import { ReactNode } from 'react';

import Box from '@mui/material/Box';

export interface ClearFixProps {
  children: ReactNode;
}

function ClearFix(props: ClearFixProps) {
  const { children } = props;
  return (
    <Box
      sx={{
        '&::after': {
          content: '""',
          clear: 'both',
          display: 'block',
        },
      }}
    >
      {children}
    </Box>
  );
}

export default ClearFix;
