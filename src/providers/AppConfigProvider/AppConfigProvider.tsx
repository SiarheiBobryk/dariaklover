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

export interface CalendlyUserProfile {
  /**
   * Indicates if the profile belongs to a "user" (individual) or "team"
   */
  name: 'User' | 'Team';
  /**
   * Human-readable name for the profile of the user that's associated with the event type
   */
  owner: string;
  /**
   * The unique reference to the user associated with the profile
   */
  type: string;
}

export interface CalendlyCustomQuestions {
  /**
   * The custom question that the host created for the event type.
   */
  name: string;
  /**
   * The type of response that the invitee provides to the custom question; can be one or multiple lines of text, a phone number, or single- or multiple-select.
   */
  type: 'string' | 'text' | 'phone_number' | 'single_select' | 'multi_select';
  /**
   * The numerical position of the question on the event booking page after the name and email address fields.
   */
  position: number;
  /**
   * true if the question created by the host is turned ON and visible on the event booking page; false if turned OFF and invisible on the event booking page.
   */
  enabled: boolean;
  /**
   * true if a response to the question created by the host is required for invitees to book the event type; false if not required.
   */
  required: boolean;
  /**
   * The invitee’s option(s) for single_select or multi_select type of responses.
   */
  answer_choices: Array<string>;
  /**
   * true if the custom question lets invitees record a written response in addition to single-select or multiple-select type of responses; false if it doesn’t.
   */
  include_other: boolean;
}

/**
 * List User's Event Types
 * https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
 */
export interface CalendlyUserEventType {
  /**
   * Indicates if the event is active or not.
   */
  active: boolean;
  /**
   * Indicates if this event type is managed by an organization admin
   */
  admin_managed: boolean;
  /**
   * Indicates if the event type is for a poll or an instant booking
   */
  booking_method: 'instant' | 'poll';
  /**
   * The hexadecimal color value of the event type's scheduling page
   */
  color: string;
  /**
   * The moment the event type was created (e.g. "2020-01-02T03:04:05.678123Z")
   */
  created_at: string;
  /**
   * Custom qestions
   */
  custom_questions: Array<CalendlyCustomQuestions>;
  /**
   * The moment the event type was deleted (e.g. "2020-01-02T03:04:05.678123Z"). Since event types can be deleted but their scheduled events remain it's useful to fetch a deleted event type when you still require event type data for a scheduled event.
   */
  deleted_at: string;
  /**
   * The event type's description (formatted with HTML)
   */
  description_html: string;
  /**
   * The length of sessions booked with this event type
   */
  duration: number;
  /**
   * Contents of a note that may be associated with the event type
   */
  internal_note: string;
  /**
   * Indicates if the event type is "solo" (belongs to an individual user) or "group"
   */
  kind: 'solo' | 'group';
  /**
   * A formatted description of the kind of event type.
   */
  kind_description: 'Collective' | 'Group' | 'One-on-One' | 'Round Robin';
  /**
   * The event type name (in human-readable format)
   */
  name: string;
  /**
   * Indicates if the event type is "round robin" (alternates between hosts) or "collective" (invitees pick a time when all participants are available) or "null" (the event type doesn’t consider the availability of a group participants)
   */
  pooling_type: 'round_robin' | 'collective';
  /**
   * The publicly visible profile of a User or a Team that's associated with the Event Type (note: some Event Types don't have profiles)
   */
  profile: CalendlyUserProfile;
  /**
   * The URL of the user’s scheduling site where invitees book this event type
   */
  scheduling_url: string;
  /**
   * Indicates if the event type is hidden on the owner's main scheduling page
   */
  secret: boolean;
  /**
   * The portion of the event type's URL that identifies a specific web page (in a human-readable format)
   */
  slug: string;
  /**
   * Indicates if the event type is "AdhocEventType" (ad hoc event) or "StandardEventType" (standard event type)
   */
  type: 'StandardEventType' | 'AdhocEventType';
  /**
   * The moment the event type was last updated (e.g. "2020-01-02T03:04:05.678123Z")
   */
  updated_at: string;
  /**
   * Canonical reference (unique identifier) for the event type
   */
  uri: string;
}

export interface CalendlyUserEventTypePagination {
  count: number;
  next_page: string;
  previous_page: string;
  next_page_token: string;
  previous_page_token: string;
}

export interface CalendlyUserEventTypeResponse {
  collection: Array<CalendlyUserEventType>;
  pagination: CalendlyUserEventTypePagination;
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
  // TODO: Refactor it
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
