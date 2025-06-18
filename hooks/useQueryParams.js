// hooks/useQueryParams.js
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParams = useCallback(
    (params) => {
      // Always create params in consistent order
      const newParams = new URLSearchParams();

      // Set category (default to 'all' if not provided but keep existing)
      if (params.category !== undefined) {
        newParams.set("category", params.category);
      } else if (searchParams.has("category")) {
        newParams.set("category", searchParams.get("category"));
      } else {
        newParams.set("category", "all");
      }

      // Set price (default to '0-100' if not provided but keep existing)
      if (params.price !== undefined) {
        newParams.set("price", params.price);
      } else if (searchParams.has("price")) {
        newParams.set("price", searchParams.get("price"));
      } else {
        newParams.set("price", "0-1000");
      }

      router.push(`${pathname}?${newParams.toString()}`);
    },
    [pathname, router, searchParams]
  );

  return { setQueryParams, searchParams };
}
