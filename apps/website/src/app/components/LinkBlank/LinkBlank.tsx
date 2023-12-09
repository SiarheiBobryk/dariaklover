import { ReactNode, Ref, forwardRef } from 'react';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from '@mui/material/Link';
import { SxProps, Theme } from '@mui/material/styles';

export interface LinkBlankProps {
  children?: ReactNode;
  href: string;
  target?: string;
  sx?: SxProps<Theme>;
  rel?: string | undefined;
}

const LinkBlank = forwardRef(function LinkBlank(props: LinkBlankProps, ref: Ref<HTMLAnchorElement>) {
  const { children, sx, target = '_blank', ...other } = props;

  return (
    <Link ref={ref} target={target} {...other}>
      {children} <OpenInNewIcon fontSize="small" sx={{ ...sx, verticalAlign: 'middle' }} />
    </Link>
  );
});

export default LinkBlank;
