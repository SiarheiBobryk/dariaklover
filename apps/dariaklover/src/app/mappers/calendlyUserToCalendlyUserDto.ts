import { CalendlyUser, CalendlyUserDto } from '@dariaklover/types';

function calendlyUserToCalendlyUserDto(calendlyUser: CalendlyUser): CalendlyUserDto {
  const {
    avatar_url: avatarUrl,
    created_at: createdAt,
    current_organization: currentOrganization,
    email,
    name,
    scheduling_url: schedulingUrl,
    slug,
    timezone,
    updated_at: updatedAt,
    uri,
  } = calendlyUser;
  return {
    avatarUrl,
    createdAt,
    currentOrganization,
    email,
    name,
    schedulingUrl,
    slug,
    timezone,
    updatedAt,
    uri,
  };
}

export default calendlyUserToCalendlyUserDto;
