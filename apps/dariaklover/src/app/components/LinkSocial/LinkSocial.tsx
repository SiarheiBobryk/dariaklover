import * as React from 'react';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

export interface LinkSocialProps {
  social?: 'telegram' | 'instagram' | 'whatsapp';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkSocial = React.forwardRef(function LinkSocial(props: LinkSocialProps, ref: React.Ref<any>) {
  const { social = 'telegram', ...other } = props;
  const config: Config = React.useContext(AppConfigContext);

  return (
    <LinkBlank ref={ref} href={config?.[social]?.href} rel="noopener" {...other}>
      {config?.[social]?.labelShort}
    </LinkBlank>
  );
});

export default LinkSocial;
