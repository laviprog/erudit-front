import { getApiBaseUrl } from '@/utils';
import { Event } from '@/types/Event';

interface EventPayload {
  id: number;
  number: number;
  title: string;
  description: string;
  datetime_event: string;
  registration_start: string;
  registration_end: string;
  duration: number;
  location: string;
  format?: 'classic' | 'family';
  price: number;
  theme?: string;
  max_teams: number;
  teams_registered: number;
  image_url?: string;
}

function transformEvent(event: EventPayload): Event {
  const { registration_start, registration_end, datetime_event, max_teams, image_url, ...rest } = event;
  return {
    registrationStart: registration_start,
    registrationEnd: registration_end,
    datetime: datetime_event,
    maxTeams: max_teams,
    imageUrl: image_url,
    ...rest,
  };
}

export default async function getEvents(): Promise<Event[]> {
  try {
    const apiUrl = getApiBaseUrl();
    const res = await fetch(`${apiUrl}/events?actual=true`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `Failed to fetch events: ${res.status}`);
    }

    const data = await res.json();
    if (!data.events || !Array.isArray(data.events)) {
      throw new Error('Invalid data format received from API');
    }

    return data.events.map(transformEvent);
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}
