import { ElementType, ReactNode, Ref, forwardRef } from 'react';

import Typography from '@mui/material/Typography';

export interface HeadingProps {
  children?: ReactNode;
  component?: ElementType;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
}

const Heading = forwardRef(function Heading(props: HeadingProps, ref: Ref<HTMLParagraphElement>) {
  const { children, component = 'h1', variant = 'h5', ...other } = props;

  return (
    <Typography ref={ref} component={component} variant={variant} gutterBottom {...other}>
      {children}
    </Typography>
  );
});

export default Heading;
