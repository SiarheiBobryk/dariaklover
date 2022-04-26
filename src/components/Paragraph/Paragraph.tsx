import * as React from 'react';

import Typography from '@mui/material/Typography';

export interface ParagraphProps {
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

function Paragraph(props: ParagraphProps) {
  const { children, component = 'p', variant = 'body1', ...other } = props;

  return (
    <Typography component={component} variant={variant} {...other}>
      {children}
    </Typography>
  );
}

export default Paragraph;
