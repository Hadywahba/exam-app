"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const segments = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";

  return (
    <nav className="text-xs sm:text-sm flex items-center gap-[.125rem]">
      {isHome ? (
        <span className="text-blue-600 text-xs sm:text-sm">Home</span>
      ) : (
        <Link href="/" className="text-gray-600 text-xs sm:text-sm ">
          Home
        </Link>
      )}

      {segments.map((segment, index) => {
        const fullPath = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        // 👇 هنا التعديل المهم: لو الـ segment هو الـ ID → اعرض title بدل ID
        const segmentLabel =
          index === 1 && title ? title : segment.replace(/-/g, " ");

        return (
          <span key={index} className="flex items-center gap-1">
            <span>/</span>

            {isLast ? (
              <span className="text-blue-600 text-xs sm:text-sm capitalize">
                {segmentLabel}
              </span>
            ) : (
              <Link
                href={fullPath}
                className="text-gray-600  text-xs sm:text-sm capitalize"
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
