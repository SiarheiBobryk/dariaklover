import * as React from 'react';

import { CalendlyUserDto } from '@dariaklover/types';

import { getCalendlyUser } from '../../services/calendlyUserService';

export const CALENDLY_USER_DEFAULT: CalendlyUserDto = {
  avatarUrl: 'https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/18347978/cddee2c8.png',
  createdAt: '2022-05-14T18:22:00.115967Z',
  currentOrganization: 'https://api.calendly.com/organizations/2cbc2c94-f66a-46da-80d9-66a35eb9c524',
  email: 'dariaklover@gmail.com',
  name: 'Дарья Кловер',
  schedulingUrl: 'https://calendly.com/dariaklover',
  slug: 'dariaklover',
  timezone: 'Europe/Berlin',
  updatedAt: '2023-02-17T11:57:22.739383Z',
  uri: 'https://api.calendly.com/users/7f7c1f65-3a7a-4cef-bb27-654c751b666e',
};

export const CalendlyContext = React.createContext<CalendlyUserDto>(CALENDLY_USER_DEFAULT);

export interface CalendlyProviderProps {
  children: React.ReactNode;
}

function CalendlyProvider(props: CalendlyProviderProps) {
  const { children } = props;

  const [user, setUser] = React.useState<CalendlyUserDto>(CALENDLY_USER_DEFAULT);

  React.useEffect(function updateCalendlyUser() {
    const controller = new AbortController();
    const { signal } = controller;
    (async function fetchCalendlyUser() {
      const userUpdated = await getCalendlyUser(signal);
      setUser(userUpdated);
    })().catch(function catchError(error) {
      // eslint-disable-next-line no-console
      console.error(error);
    });
    return function cleanUpFetch() {
      controller.abort();
    };
  }, []);

  return <CalendlyContext.Provider value={user}>{children}</CalendlyContext.Provider>;
}

export default CalendlyProvider;
