"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Chip } from "@/components/chip";
import { Filter } from "@/lib/api/types/schema";
import { createQueryString } from "@/utils/createQueryString";

interface FoodFilterProps {
  filters: Filter[];
}

export function FoodFilter({ filters }: FoodFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const foodCategories = searchParams.getAll("food_category");

  return (
    <div className="flex flex-col gap-2.5">
      {filters.map((filter) => (
        <Link
          key={filter.id}
          href={
            pathname +
            "?" +
            createQueryString({
              searchParams,
              name: "food_category",
              value: filter.id,
            })
          }
        >
          <Chip
            key={`food-filter-${filter.id}`}
            size="large"
            isActive={foodCategories.includes(filter.id)}
          >
            {filter.name}
          </Chip>
        </Link>
      ))}
    </div>
  );
}
