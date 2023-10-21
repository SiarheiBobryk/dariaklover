import { CalendlyUserEventDto, CalendlyUserEventType } from '@dariaklover/types';

function calendlyUserEventTypeToDto(calendlyUserEventType: CalendlyUserEventType): CalendlyUserEventDto {
  const {
    active,
    admin_managed: adminManaged,
    booking_method: bookingMethod,
    color,
    created_at: createdAt,
    custom_questions: customQuestions,
    deleted_at: deletedAt,
    description_html: descriptionHtml,
    description_plain: descriptionPlain,
    duration,
    internal_note: internalNote,
    kind,
    kind_description: kindDescription,
    name,
    pooling_type: poolingType,
    profile,
    scheduling_url: schedulingUrl,
    secret,
    slug,
    type,
    updated_at: updatedAt,
    uri,
  } = calendlyUserEventType;
  return {
    active,
    adminManaged,
    bookingMethod,
    color,
    createdAt,
    customQuestions,
    deletedAt,
    descriptionHtml,
    descriptionPlain,
    duration,
    internalNote,
    kind,
    kindDescription,
    name,
    poolingType,
    profile,
    schedulingUrl,
    secret,
    slug,
    type,
    updatedAt,
    uri,
  };
}

export default calendlyUserEventTypeToDto;
