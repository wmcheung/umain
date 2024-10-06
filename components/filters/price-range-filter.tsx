"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Chip } from "@/components/chip";
import { PriceRange } from "@/lib/api/types/schema";
import { createQueryString } from "@/utils/createQueryString";

interface PriceRangeFilterProps {
  priceRanges: PriceRange[];
}

export function PriceRangeFilter({ priceRanges }: PriceRangeFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const priceRangesSearch = searchParams.getAll("price_range");

  return (
    <div className="flex flex-wrap gap-2">
      {priceRanges.map((priceRange) => (
        <Link
          key={`price-range-filter-${priceRange.range}`}
          href={
            pathname +
            "?" +
            createQueryString({
              searchParams,
              name: "price_range",
              value: priceRange.id.toString(),
            })
          }
        >
          <Chip
            key={priceRange.id}
            size="large"
            isActive={priceRangesSearch.includes(priceRange.id.toString())}
          >
            {priceRange.range}
          </Chip>
        </Link>
      ))}
    </div>
  );
}
