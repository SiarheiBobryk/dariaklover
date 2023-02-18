import * as React from 'react';
import { CalendlyUser, getCalendlyUser } from '../../services/calendlyUserService';

export const CALENDLY_USER_DEFAULT: CalendlyUser = {
  avatar_url: 'https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/18347978/cddee2c8.png',
  created_at: '2022-05-14T18:22:00.115967Z',
  current_organization: 'https://api.calendly.com/organizations/2cbc2c94-f66a-46da-80d9-66a35eb9c524',
  email: 'dariaklover@gmail.com',
  name: 'Дарья Кловер',
  scheduling_url: 'https://calendly.com/dariaklover',
  slug: 'dariaklover',
  timezone: 'Europe/Berlin',
  updated_at: '2023-02-17T11:57:22.739383Z',
  uri: 'https://api.calendly.com/users/7f7c1f65-3a7a-4cef-bb27-654c751b666e',
};

export const CalendlyContext = React.createContext<CalendlyUser>(CALENDLY_USER_DEFAULT);

export interface CalendlyProviderProps {
  children: React.ReactNode;
}

function CalendlyProvider(props: CalendlyProviderProps) {
  const { children } = props;

  const [user, setUser] = React.useState<CalendlyUser>(CALENDLY_USER_DEFAULT);

  async function fetchCalendlyUser() {
    const userUpdated = await getCalendlyUser();
    setUser(userUpdated);
  }

  React.useEffect(() => {
    fetchCalendlyUser().catch((error) => {
      // eslint-disable-next-line no-console
      return console.error(error);
    });
  }, []);

  return <CalendlyContext.Provider value={user}>{children}</CalendlyContext.Provider>;
}

export default CalendlyProvider;
