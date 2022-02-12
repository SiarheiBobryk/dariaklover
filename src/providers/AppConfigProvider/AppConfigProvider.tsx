import * as React from 'react';

import { PaletteMode } from '@mui/material';

export interface Config {
  title: string;
  url: string;
  description: string;
  keywords: string;
  language: string;
  pageNameBase: string;
  colorModeDefault: PaletteMode;
}

export const config: Config = {
  title: 'Дарья Кловер - Специалист и коуч по здоровью',
  url: 'https://dariaklover.health',
  description:
    // eslint-disable-next-line max-len
    'Образовательный сайт о здоровом образе жизни, инструментах и способах его достижения. Дарья Кловер - врач общей практики, косметик, блогер, зож-энтузиаст, будущий специалист и коуч по здоровью.',
  keywords: 'хелс коуч, health coach, здоровье, красота, питание, гармония, сопровождение, антиэйдж',
  language: 'ru',
  pageNameBase: 'Дарья Кловер',
  colorModeDefault: 'light',
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
