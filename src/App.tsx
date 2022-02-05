import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import Copyright from './components/Copyright';

export default function App() {
  return (
    <>
      <TopBar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quaerat vel laboriosam corrupti placeat.
            Molestias aliquam architecto repudiandae nobis recusandae itaque quibusdam deserunt qui amet. Iusto qui
            architecto labore voluptatem!
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
