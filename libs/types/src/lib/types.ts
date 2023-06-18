export interface PageMetaData {
  title: string;
  heading: string;
  path: string;
  breadcrumb: string;
}

export interface CalendlyUserDto {
  avatarUrl: string;
  createdAt: string;
  currentOrganization: string;
  email: string;
  name: string;
  schedulingUrl: string;
  slug: string;
  timezone: string;
  updatedAt: string;
  uri: string;
}

// https://developer.calendly.com/api-docs/005832c83aeae-get-current-user
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

// https://developer.calendly.com/api-docs/005832c83aeae-get-current-user
export interface CalendlyUserResponse {
  resource: CalendlyUser;
}

// https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
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

// https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
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

// https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
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
   * The event type's description (formatted with plain text)
   */
  description_plain: string;
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

// https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
export interface CalendlyUserEventTypePagination {
  count: number;
  next_page: string;
  previous_page: string;
  next_page_token: string;
  previous_page_token: string;
}

// https://developer.calendly.com/api-docs/25a4ece03c1bc-list-user-s-event-types
export interface CalendlyUserEventTypeResponse {
  collection: Array<CalendlyUserEventType>;
  pagination: CalendlyUserEventTypePagination;
}
