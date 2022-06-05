import * as React from 'react';

import { PaletteMode } from '@mui/material';

export interface MetaTags {
  description: string;
  keywords: string;
  'msapplication-TileColor': string;
}

export interface CalendlyAppointment {
  id: string;
  active: boolean;
  newTab: boolean;
  label: string;
}

export interface Config extends MetaTags {
  fullName: string;
  title: string;
  url: string;
  language: string;
  colorModeDefault: PaletteMode;
  themeColor: {
    light: string;
    dark: string;
  };
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
  whatsapp: {
    id: string;
    href: string;
    label: string;
  };
  calendly: {
    id: string;
    href: string;
    label: string;
    appointments: Array<CalendlyAppointment>;
    conformation: boolean;
  };
  email: string;
  github: string;
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
  themeColor: {
    light: '#fff',
    dark: '#212121',
  },
  instagram: {
    id: '@daria.klover',
    href: 'https://www.instagram.com/daria.klover',
    label: 'Инстаграм Дарьи',
  },
  telegram: {
    id: 'dariaklover',
    href: 'https://t.me/dariaklover',
    label: 'Телеграм Дарьи',
  },
  whatsapp: {
    // TODO: Setup the branded account id (payed feature) later
    id: '+46738540708',
    href: 'https://wa.me/+46738540708',
    label: 'WhatsApp Дарьи',
  },
  calendly: {
    id: 'dariaklover',
    href: 'https://calendly.com/dariaklover',
    label: 'Календарь Дарьи',
    appointments: [
      // NOTE: Due to limitations of a free account on Calendly, only one appointment type should be active
      { id: 'trial', active: true, newTab: true, label: 'Ознакомительная встреча' },
      { id: 'regular', active: false, newTab: true, label: 'Heath-коучинг сессия' },
    ],
    conformation: false,
  },
  'msapplication-TileColor': '#ffc40d',
  email: 'dariaklover@gmail.com',
  github: 'https://github.com/SiarheiBobryk/DariaKlover-website',
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
