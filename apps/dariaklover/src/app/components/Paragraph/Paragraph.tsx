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

const Paragraph = React.forwardRef(function Paragraph(props: ParagraphProps, ref: React.Ref<HTMLParagraphElement>) {
  const { children, component = 'p', variant = 'body1', ...other } = props;

  return (
    <Typography ref={ref} component={component} variant={variant} gutterBottom {...other}>
      {children}
    </Typography>
  );
});

export default Paragraph;
