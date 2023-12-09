import { Ref, forwardRef, useContext } from 'react';

import { Config } from '@dariaklover/types';
import { LinkProps } from '@mui/material/Link';

import { AppConfigContext } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

export interface LinkEmailProps extends LinkProps {}

const LinkEmail = forwardRef(function LinkEmail(props: LinkEmailProps, ref: Ref<HTMLAnchorElement>) {
  const {
    email: { id, labelShort },
  }: Config = useContext(AppConfigContext);

  return (
    <LinkBlank ref={ref} href={`mailto: ${id}`} rel="noopener" {...props}>
      {labelShort}
    </LinkBlank>
  );
});

export default LinkEmail;
