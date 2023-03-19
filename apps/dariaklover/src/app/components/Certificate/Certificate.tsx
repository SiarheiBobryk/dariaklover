import * as React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// TODO: Move in to ".env"
export const PUBLIC_PATH = 'assets/responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.typography.pxToRem(8),
    width: '100%',
  };
});

export interface CertificateProps {
  certificateId: string;
  title: string;
  subtitle: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Certificate = React.forwardRef(function Certificate(props: CertificateProps, ref: React.Ref<any>) {
  const { certificateId, title, subtitle, ...other } = props;

  return (
    <Box ref={ref} component="figure" sx={{ margin: 0 }} {...other}>
      <Box component="picture">
        <source type="image/webp" srcSet={`${PUBLIC_PATH}/${certificateId}.webp`} />
        <source type="image/jpeg" srcSet={`${PUBLIC_PATH}/${certificateId}.jpg`} />
        <Img src={`${PUBLIC_PATH}/${certificateId}.jpg`} alt={title} loading="lazy" />
      </Box>
      <Typography component="figcaption" variant="body2">
        {title}
        <br />
        <small>{subtitle}</small>
      </Typography>
    </Box>
  );
});

export default Certificate;
