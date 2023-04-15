import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const { NX_IMAGES_PATH = '' } = process.env;

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    maxWidth: '100%',
    borderRadius: theme.typography.pxToRem(8),
  };
});

export const Figure = styled('figure')(function styleFigure({ theme }) {
  return {
    marginTop: 0,
    marginRight: 0,
    marginBottom: theme.typography.pxToRem(8),
    marginLeft: 0,
  };
});

export interface ImageProps {
  fileName: string;
  alt: string;
  caption: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Image = React.forwardRef(function Image(props: ImageProps, ref: React.Ref<any>) {
  const { fileName, alt, caption, ...other } = props;

  return (
    <Figure ref={ref} {...other}>
      <picture>
        <source type="image/webp" srcSet={`${NX_IMAGES_PATH}/${fileName}.webp`} />
        <Img loading="lazy" src={`${NX_IMAGES_PATH}/${fileName}.png`} alt={alt} />
      </picture>
      <figcaption>
        <Typography component="p" variant="caption" sx={{ textAlign: 'center' }}>
          {caption}
        </Typography>
      </figcaption>
    </Figure>
  );
});

export default Image;
