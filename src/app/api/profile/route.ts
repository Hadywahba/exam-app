// app/api/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = await fetch(
    'https://exam.elevateegy.com/api/v1/auth/profileData',
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token.accesstoken}`,
        token: token.accesstoken,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json(data);
}
