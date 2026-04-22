import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.accesstoken) {
    return NextResponse.json(
      {
        status: false,
        code: 401,
        message: 'Unauthorized',
      },
      { status: 401 },
    );
  }

  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '20';

    const apiUrl = new URL('https://exam-app.elevate-bootcamp.cloud/api/exams');

    apiUrl.searchParams.set('page', page);
    apiUrl.searchParams.set('limit', limit);

    const response = await fetch(apiUrl.toString(), {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token.accesstoken}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          status: false,
          code: response.status,
          message: result?.message || 'Failed to fetch exams',
          errors: result?.errors || [],
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      status: true,
      code: 200,
      payload: result.payload,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: false,
        code: 500,
        error: err instanceof Error ? err.message : 'Server error',
      },
      { status: 500 },
    );
  }
}
