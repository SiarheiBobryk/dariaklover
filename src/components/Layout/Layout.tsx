import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Footer from '../Footer';
import TopBar from '../TopBar';

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
      {/* TODO: Add the site version block here */}
      <Footer />
    </Box>
  );
}

export default Layout;
