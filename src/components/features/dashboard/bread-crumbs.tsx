'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Breadcrumbs() {
  // Hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variable
  const title = searchParams.get('title');
  const segments = pathname.split('/').filter(Boolean);
  const isHome = pathname === '/';

  return (
    <nav className="flex items-center gap-[.125rem] text-xs sm:text-sm">
      {isHome ? (
        <span className="text-xs text-blue-600 sm:text-sm">Home</span>
      ) : (
        <Link href="/" className="text-xs text-gray-600 sm:text-sm">
          Home
        </Link>
      )}

      {segments.map((segment, index) => {
        const fullPath = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;

        const segmentLabel =
          index === 1 && title ? title : segment.replace(/-/g, ' ');

        return (
          <span key={index} className="flex items-center gap-1">
            <span>/</span>

            {isLast ? (
              <span className="text-xs capitalize text-blue-600 sm:text-sm">
                {segmentLabel}
              </span>
            ) : (
              <Link
                href={fullPath}
                className="text-xs capitalize text-gray-600 sm:text-sm"
              >
                {segmentLabel}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
