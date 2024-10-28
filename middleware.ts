import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/projects/spend-elon-musk-money')) {
    return NextResponse.rewrite(
      new URL(
        request.nextUrl.pathname.replace('/projects/spend-elon-musk-money', ''),
        'https://spend-elon-musk-money-eight.vercel.app'
      )
    )
  }
}

export const config = {
  matcher: ['/projects/spend-elon-musk-money/:path*']
}