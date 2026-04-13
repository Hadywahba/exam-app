// app/api/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // جلب الـ query params
    const url = new URL(req.url);
    const diplomaId = url.searchParams.get('diplomaId'); // اختياري
    const page = url.searchParams.get('page') || '1';
    const limit = url.searchParams.get('limit') || '20';

    // بناء رابط الـ API الخارجي
    const apiUrl = new URL('https://exam-app.elevate-bootcamp.cloud/api/exams');
    apiUrl.searchParams.append('page', page);
    apiUrl.searchParams.append('limit', limit);
    if (diplomaId) apiUrl.searchParams.append('diplomaId', diplomaId);

    // استدعاء API مع التوكن
    const res = await fetch(apiUrl.toString(), {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token.accesstoken}`,
        token: token.accesstoken,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(errorData, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { status: false, message: 'Server error', error: err },
      { status: 500 },
    );
  }
}
