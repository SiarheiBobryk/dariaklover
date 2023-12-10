import {
  CalendlyUserDto,
  CalendlyUserEventDto,
  CalendlyUserEventTypeResponse,
  CalendlyUserResponse,
} from '@dariaklover/types';

import calendlyUserEventTypeToDto from '../mappers/calendlyUserEventTypeToDto';
import calendlyUserToDto from '../mappers/calendlyUserToDto';

export const CALENDLY_URL = 'https://api.calendly.com';

export const CALENDLY_API = {
  GET_CURRENT_USER: `${CALENDLY_URL}/users/me`,
  LIST_USERS_EVENT_TYPES: `${CALENDLY_URL}/event_types?user=`,
} as const;

const HEADERS = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${process.env.NX_CALENDLY_ACCESS_TOKEN ?? ''}`,
} as const;

export async function getCalendlyUser(signal: AbortSignal): Promise<CalendlyUserDto> {
  const response: Response = await fetch(CALENDLY_API.GET_CURRENT_USER, {
    headers: HEADERS,
    signal,
  });
  const calendlyUserResponse = (await response.json()) as CalendlyUserResponse;
  const { resource: calendlyUser } = calendlyUserResponse;
  return calendlyUserToDto(calendlyUser);
}

export async function getCalendlyEvents(
  calendlyUserUri: string,
  signal: AbortSignal,
): Promise<Array<CalendlyUserEventDto>> {
  const LIST_USERS_EVENT_TYPES = `${CALENDLY_API.LIST_USERS_EVENT_TYPES}${calendlyUserUri}`;
  const response = await fetch(LIST_USERS_EVENT_TYPES, {
    headers: HEADERS,
    signal,
  });
  const calendlyUserResponse = (await response.json()) as CalendlyUserEventTypeResponse;
  const { collection: calendlyEvents = [] } = calendlyUserResponse;
  return calendlyEvents.map(calendlyUserEventTypeToDto);
}

export async function getCalendlyEventsActive(
  calendlyUserUri: string,
  signal: AbortSignal,
): Promise<Array<CalendlyUserEventDto>> {
  const calendlyEvents = await getCalendlyEvents(calendlyUserUri, signal);
  const calendlyEventsActive = calendlyEvents.filter(function isActive(event) {
    const { active } = event;
    return active;
  });
  return calendlyEventsActive;
}
