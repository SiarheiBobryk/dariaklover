import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { Config } from '@dariaklover/types';
import { Theme, useTheme } from '@mui/material/styles';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../package.json';
import { AppConfigContext } from '../../providers/AppConfigProvider';

function Head() {
  const theme: Theme = useTheme();
  const { fullName, language, description, keywords, ...configs }: Config = useContext(AppConfigContext);

  return (
    // NOTE: We set the actual HTML `title` in the body of the `App` children
    <Helmet titleTemplate={`%s | ${fullName}`}>
      <html lang={language} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={theme.palette.background.default} />
      <link rel="apple-touch-icon" sizes="180x180" href={`assets/icon/apple-touch-icon.png?v=${packageJson.version}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`assets/icon/favicon-32x32.png?v=${packageJson.version}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`assets/icon/favicon-16x16.png?v=${packageJson.version}`} />
      <link rel="manifest" href={`assets/icon/site.webmanifest?v=${packageJson.version}`} />
      <link rel="mask-icon" href={`assets/icon/safari-pinned-tab.svg?v=${packageJson.version}`} color="#5bbad5" />
      <link rel="icon" href={`assets/icon/favicon.ico?v=${packageJson.version}`} type="image/x-icon" />
      <meta name="msapplication-TileColor" content={configs['msapplication-TileColor']} />
      <meta name="msapplication-config" content={`assets/icon/browserconfig.xml?v=${packageJson.version}`} />
    </Helmet>
  );
}

export default Head;
