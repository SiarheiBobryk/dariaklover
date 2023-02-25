import * as React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { ReactComponent as ViberSvg } from './viber.svg';

function Viber(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <ViberSvg />
    </SvgIcon>
  );
}

export default Viber;
