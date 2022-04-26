import * as React from 'react';

import { PaletteMode } from '@mui/material';

export interface Config {
  fullName: string;
  title: string;
  url: string;
  description: string;
  keywords: string;
  language: string;
  pageNameBase: string;
  colorModeDefault: PaletteMode;
  instagram: {
    id: string;
    href: string;
  };
}

export const config: Config = {
  fullName: 'Дарья Кловер',
  title: 'Дарья Кловер - Специалист и коуч по здоровью',
  url: 'https://dariaklover.health',
  description:
    // eslint-disable-next-line max-len
    'Образовательный сайт о здоровом образе жизни, инструментах и способах его достижения. Дарья Кловер - врач общей практики, косметик, блогер, зож-энтузиаст, будущий специалист и коуч по здоровью.',
  keywords: 'хелс коуч, health coach, здоровье, красота, питание, гармония, сопровождение, антиэйдж',
  language: 'ru',
  pageNameBase: 'Дарья Кловер',
  colorModeDefault: 'light',
  instagram: {
    id: '@daria.klover',
    href: 'https://www.instagram.com/daria.klover',
  },
};

export const AppConfigContext = React.createContext<Config>(config);

export interface AppConfigProviderProps {
  children: React.ReactElement;
}

function AppConfigProvider(props: AppConfigProviderProps) {
  const { children } = props;
  return <AppConfigContext.Provider value={config}>{children}</AppConfigContext.Provider>;
}

export default AppConfigProvider;
