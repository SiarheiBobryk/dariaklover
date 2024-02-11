import * as React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import Logo from './logo.svg';

function FourLeafClover(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Logo />
    </SvgIcon>
  );
}

export default FourLeafClover;
