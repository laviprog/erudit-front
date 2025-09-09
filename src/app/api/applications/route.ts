import { NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/utils';

interface ApplicationPayload {
  captain_name: string;
  captain_email: string;
  captain_phone: string;
  team_name: string;
  team_participants_number: number;
  event_id: number;
}

interface ApplicationRequest {
  name: string;
  email: string;
  phone: string;
  teamName: string;
  teamParticipantsNumber: number;
  eventId: number;
}

function transformApplication(data: ApplicationRequest): ApplicationPayload {
  return {
    captain_name: data.name,
    captain_email: data.email,
    captain_phone: data.phone,
    team_name: data.teamName,
    team_participants_number: data.teamParticipantsNumber,
    event_id: data.eventId,
  };
}

export async function POST(request: Request) {
  try {
    const apiBaseUrl = getApiBaseUrl();
    const req_data: ApplicationRequest = await request.json();

    const transformedData = transformApplication(req_data);

    const res = await fetch(`${apiBaseUrl}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transformedData),
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch applications' }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
