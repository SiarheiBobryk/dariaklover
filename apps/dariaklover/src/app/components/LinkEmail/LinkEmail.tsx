import * as React from 'react';

import { Config } from '@dariaklover/types';
import { LinkProps } from '@mui/material/Link';

import { AppConfigContext } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

export interface LinkEmailProps extends LinkProps {}

const LinkEmail = React.forwardRef(function LinkEmail(props: LinkEmailProps, ref: React.Ref<HTMLAnchorElement>) {
  const {
    email: { id, labelShort },
  }: Config = React.useContext(AppConfigContext);

  return (
    <LinkBlank ref={ref} href={`mailto: ${id}`} rel="noopener" {...props}>
      {`${labelShort}`}
    </LinkBlank>
  );
});

export default LinkEmail;
