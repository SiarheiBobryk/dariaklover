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
    labelShort: string;
  };
  telegram: {
    id: string;
    href: string;
    label: string;
    labelShort: string;
  };
  whatsapp: {
    id: string;
    href: string;
    label: string;
    labelShort: string;
  };
  calendly: {
    id: string;
    href: string;
    label: string;
    appointments: Array<CalendlyAppointment>;
    conformation: boolean;
  };
  email: {
    id: string;
    label: string;
    labelShort: string;
  };
  github: string;
}

export const config: Config = {
  fullName: 'Дарья Кловер',
  title: 'Дарья Кловер - Специалист и коуч по здоровью',
  url: 'https://dariaklover.health',
  description: 'Дарья Кловер - специалист и коуч по здоровью, проводник к здоровому образу жизни.',
  keywords:
    'health-коуч, health coach, осознанность, здоровье, здоровое мышление, оздоровление, комплексный подход, холистический подход, физическая активность, сон, восстановление, адаптация, здоровая миграция, коучинг, саморазвитие, постановка целей, стресс менеджмент, уверенность в себе, проявленность, красота, питание, гармония, сопровождение, антиэйдж',
  language: 'ru',
  colorModeDefault: 'light', // NOTE: the color-mode is managed by `ColorModeProvider`
  themeColor: {
    light: '#fff',
    dark: '#212121',
  },
  instagram: {
    id: '@daria.klover',
    href: 'https://www.instagram.com/daria.klover',
    label: 'Instagram Дарьи',
    labelShort: 'Instagram',
  },
  telegram: {
    id: 'dariaklover',
    href: 'https://t.me/dariaklover',
    label: 'Telegram Дарьи',
    labelShort: 'Telegram',
  },
  whatsapp: {
    // SOMEDAY: Setup the branded account id (payed feature) later
    id: '+46738540708',
    href: 'https://wa.me/+46738540708',
    label: 'WhatsApp Дарьи',
    labelShort: 'WhatsApp',
  },
  calendly: {
    id: 'dariaklover',
    href: 'https://calendly.com/dariaklover',
    label: 'Календарь Дарьи',
    appointments: [
      // NOTE: Due to limitations of a free account on Calendly, only one appointment type should be active
      { id: 'trial', active: false, newTab: true, label: 'Ознакомительная встреча' },
      { id: 'regular', active: true, newTab: true, label: 'Heath-коучинг сессия' },
    ],
    conformation: false,
  },
  'msapplication-TileColor': '#ffc40d',
  email: {
    id: 'dariaklover@gmail.com',
    label: 'Электронная почта',
    labelShort: 'Email',
  },
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
