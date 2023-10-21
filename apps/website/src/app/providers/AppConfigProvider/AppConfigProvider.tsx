import * as React from 'react';

import { Config } from '@dariaklover/types';

export const config: Config = {
  fullName: 'Дарья Кловер',
  title: 'Дарья Кловер - Специалист и коуч по здоровью',
  url: 'https://dariaklover.health',
  description: 'Дарья Кловер - специалист и коуч по здоровью, проводник к здоровому образу жизни.',
  keywords:
    'health-коуч, коуч по здоровью, health coach, осознанность, здоровье, здоровое мышление, оздоровление, комплексный подход, холистический подход, физическая активность, сон, восстановление, адаптация, здоровая миграция, коучинг, саморазвитие, постановка целей, стресс менеджмент, уверенность в себе, проявленность, красота, питание, гармония, сопровождение, антиэйдж',
  language: 'ru',
  colorModeDefault: 'light', // The color-mode is managed by `ColorModeProvider`
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
