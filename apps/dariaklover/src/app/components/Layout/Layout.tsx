import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Breadcrumbs from '../Breadcrumbs';
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
        <Breadcrumbs />
        <Box sx={{ paddingBottom: 7 }}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
