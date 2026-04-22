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

  try {
    // قراءة query params
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '20';
    const diplomaId = searchParams.get('diplomaId');
    const search = searchParams.get('search'); // 👈 جديد (لو عايز بحث)

    // بناء URL للـ external API
    const apiUrl = new URL('https://exam-app.elevate-bootcamp.cloud/api/exams');

    apiUrl.searchParams.set('page', page);
    apiUrl.searchParams.set('limit', limit);

    if (diplomaId) {
      apiUrl.searchParams.set('diplomaId', diplomaId);
    }

    if (search) {
      apiUrl.searchParams.set('search', search);
    }

    const response = await fetch(apiUrl.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token.accesstoken}`,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);

      return NextResponse.json(
        {
          error: 'Failed to fetch exams',
          details: error,
        },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        error: 'Server error',
        message: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
