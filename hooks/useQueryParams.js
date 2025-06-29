// hooks/useQueryParams.js
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const setQueryParams = (params) => {
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return { setQueryParams, queryParams: params };
}
