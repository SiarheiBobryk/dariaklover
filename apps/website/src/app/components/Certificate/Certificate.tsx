import { Ref, forwardRef } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const { NX_IMAGES_PATH = '' } = process.env;

export const Figure = styled('figure')(function styleFigure() {
  return {
    margin: 0,
  };
});

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

const Certificate = forwardRef(function Certificate(props: CertificateProps, ref: Ref<HTMLDivElement>) {
  const { certificateId, title, subtitle, ...other } = props;

  return (
    <Figure ref={ref} {...other}>
      <picture>
        <source type="image/webp" srcSet={`${NX_IMAGES_PATH}/${certificateId}.webp`} />
        <source type="image/jpeg" srcSet={`${NX_IMAGES_PATH}/${certificateId}.jpg`} />
        <Img src={`${NX_IMAGES_PATH}/${certificateId}.jpg`} alt={title} loading="lazy" />
      </picture>
      <Typography component="figcaption" variant="body2">
        {title}
        <br />
        <small>{subtitle}</small>
      </Typography>
    </Figure>
  );
});

export default Certificate;
