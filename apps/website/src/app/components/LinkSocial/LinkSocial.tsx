import { Ref, forwardRef, useContext } from 'react';

import { Config } from '@dariaklover/types';

import { AppConfigContext } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

export interface LinkSocialProps {
  social?: 'telegram' | 'instagram' | 'whatsapp';
}

const LinkSocial = forwardRef(function LinkSocial(props: LinkSocialProps, ref: Ref<HTMLAnchorElement>) {
  const { social = 'telegram', ...other } = props;
  const config: Config = useContext(AppConfigContext);

  return (
    <LinkBlank ref={ref} href={config?.[social]?.href} rel="noopener" {...other}>
      {config?.[social]?.labelShort}
    </LinkBlank>
  );
});

export default LinkSocial;
