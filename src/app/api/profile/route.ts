// app/api/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.accesstoken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  console.log('TOKEN:', token.accesstoken);

  const response = await fetch(
    'https://exam-app.elevate-bootcamp.cloud/api/users/profile',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.accesstoken}`,
      },
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: response.status },
    );
  }

  const data = await response.json();

  return NextResponse.json(data);
}
