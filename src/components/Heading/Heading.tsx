import * as React from 'react';
import Typography from '@mui/material/Typography';

export interface HeadingProps {
  children?: string;
}

// TODO: Set the right type for `ref` here. `never` is used as temporarily workaround
const Heading = React.forwardRef(function Heading(props: HeadingProps, ref: React.ForwardedRef<HTMLParagraphElement>) {
  const { children } = props;

  return (
    <Typography variant="h4" component="h1" gutterBottom ref={ref}>
      {children}
    </Typography>
  );
});

export default Heading;
