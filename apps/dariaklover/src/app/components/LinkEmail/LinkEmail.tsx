import * as React from 'react';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkEmailProps {
  // TODO: Inherit the Link component props here
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkEmail = React.forwardRef(function LinkEmail(props: LinkEmailProps, ref: React.Ref<any>) {
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
