import * as React from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface LinkBlankProps {
  children?: React.ReactNode;
  href: string;
  target?: string;
  sx?: SxProps<Theme>;
  rel?: string | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkBlank = React.forwardRef(function LinkBlank(props: LinkBlankProps, ref: React.Ref<any>) {
  const { children, target = '_blank', ...other } = props;

  return (
    <Link ref={ref} target={target} {...other}>
      {children} <OpenInNewIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
    </Link>
  );
});

export default LinkBlank;
