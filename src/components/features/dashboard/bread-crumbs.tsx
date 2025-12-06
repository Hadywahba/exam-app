"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment);

  const isHome = pathname === "/";

  return (
    <nav className="text-sm flex items-center gap-1">
      {/* HOME */}
      {isHome ? (
        <span className="text-blue-600  font-normal text-sm">Home</span>   
      ) : (
        <Link href="/" className="text-gray-600 font-normal text-sm ">
          Home
        </Link>
      )}

      {/* OTHER SEGMENTS */}
      {segments.map((segment, index) => {
        const fullPath = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1; 

        return (
          <span className="flex items-center gap-1" key={index}>
            <span>/</span>

            {isLast ? (
              // ACTIVE
              <span className="text-blue-600 font-normal text-sm capitalize">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              // NOT ACTIVE 
              <Link
                href={fullPath}
                className="text-gray-600 font-normal text-sm  capitalize"
              >
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
