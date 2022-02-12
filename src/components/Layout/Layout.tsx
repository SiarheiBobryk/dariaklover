import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import TopBar from '../TopBar';
import Copyright from '../Copyright';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Box>
      <TopBar />
      <Container maxWidth="md">
        <Box sx={{ py: 7 }}>{children}</Box>
      </Container>
      <Copyright />
    </Box>
  );
}

export default Layout;
