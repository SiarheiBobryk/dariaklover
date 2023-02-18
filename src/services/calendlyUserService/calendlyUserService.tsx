export interface CalendlyUser {
  avatar_url: string;
  created_at: string;
  current_organization: string;
  email: string;
  name: string;
  scheduling_url: string;
  slug: string;
  timezone: string;
  updated_at: string;
  uri: string;
}

export interface CalendlyUserResponse {
  resource: CalendlyUser;
}

export const CALENDLY_API = {
  GET_CURRENT_USER: 'https://api.calendly.com/users/me',
} as const;

export async function getCalendlyUser() {
  const response: Response = await fetch(CALENDLY_API.GET_CURRENT_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN ?? ''}`,
    },
  });

  const calendlyUserResponse = (await response.json()) as CalendlyUserResponse;
  const { resource: calendlyUser } = calendlyUserResponse;
  return calendlyUser;
}
