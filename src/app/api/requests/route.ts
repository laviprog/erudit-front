import { NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/utils';
import RequestObj from '@/types/Request';

export async function POST(request: Request) {
  try {
    const apiBaseUrl = getApiBaseUrl();
    const req_data: RequestObj = await request.json();

    const res = await fetch(`${apiBaseUrl}/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req_data),
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
