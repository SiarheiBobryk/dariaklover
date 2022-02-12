import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Copyright from './components/Copyright';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quaerat vel laboriosam corrupti placeat.
          Molestias aliquam architecto repudiandae nobis recusandae itaque quibusdam deserunt qui amet. Iusto qui
          architecto labore voluptatem!
        </Typography>
        <Copyright />
      </Box>
    </Layout>
  );
}

export default App;
