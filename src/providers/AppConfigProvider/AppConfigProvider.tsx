import * as React from 'react';

import { PaletteMode } from '@mui/material';

export interface MetaTags {
  description: string;
  keywords: string;
  'msapplication-TileColor': string;
}

export interface Config extends MetaTags {
  fullName: string;
  title: string;
  url: string;
  language: string;
  colorModeDefault: PaletteMode;
  instagram: {
    id: string;
    href: string;
    label: string;
  };
  telegram: {
    id: string;
    href: string;
    label: string;
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
  colorModeDefault: 'light', // NOTE: the color-mode is managed by `ColorModeProvider`
  instagram: {
    id: '@daria.klover',
    href: 'https://www.instagram.com/daria.klover',
    label: 'Инстаграм Дарьи',
  },
  telegram: {
    id: 'dariaklower',
    href: 'https://t.me/dariaklover',
    label: 'Телеграм Дарьи',
  },
  'msapplication-TileColor': '#ffc40d',
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
