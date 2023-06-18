import {
  CalendlyUserDto,
  CalendlyUserEventType,
  CalendlyUserEventTypeResponse,
  CalendlyUserResponse,
} from '@dariaklover/types';

import calendlyUserToCalendlyUserDto from '../../mappers/calendlyUserToCalendlyUserDto';

export const CALENDLY_URL = 'https://api.calendly.com';

export const CALENDLY_API = {
  GET_CURRENT_USER: `${CALENDLY_URL}/users/me`,
  LIST_USERS_EVENT_TYPES: `${CALENDLY_URL}/event_types?user=`,
} as const;

const HEADERS = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${process.env.NX_CALENDLY_ACCESS_TOKEN ?? ''}`,
} as const;

export async function getCalendlyUser(): Promise<CalendlyUserDto> {
  const response: Response = await fetch(CALENDLY_API.GET_CURRENT_USER, {
    headers: HEADERS,
  });
  const calendlyUserResponse = (await response.json()) as CalendlyUserResponse;
  const { resource: calendlyUser } = calendlyUserResponse;
  return calendlyUserToCalendlyUserDto(calendlyUser);
}

export async function getCalendlyEvents(calendlyUserUri: string): Promise<Array<CalendlyUserEventType>> {
  const LIST_USERS_EVENT_TYPES = `${CALENDLY_API.LIST_USERS_EVENT_TYPES}${calendlyUserUri}`;
  const response = await fetch(LIST_USERS_EVENT_TYPES, {
    headers: HEADERS,
  });
  const calendlyUserResponse = (await response.json()) as CalendlyUserEventTypeResponse;
  const { collection: calendlyEvents } = calendlyUserResponse;
  return calendlyEvents;
}

export async function getCalendlyEventsActive(calendlyUserUri: string): Promise<Array<CalendlyUserEventType>> {
  const calendlyEvents = await getCalendlyEvents(calendlyUserUri);
  const calendlyEventsActive = calendlyEvents.filter(function isActive(event) {
    const { active } = event;
    return active;
  });
  return calendlyEventsActive;
}
