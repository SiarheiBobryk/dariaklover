import * as React from 'react';

import Typography from '@mui/material/Typography';

export interface HeadingProps {
  children?: React.ReactNode;
  component?: React.ElementType;
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

function Heading(props: HeadingProps) {
  const { children, component = 'h2', variant = 'h5', ...other } = props;

  return (
    <Typography component={component} variant={variant} {...other}>
      {children}
    </Typography>
  );
}

export default Heading;
