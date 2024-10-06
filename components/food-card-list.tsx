"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { FoodCard } from "@/components/food-card";
import { BASE_URL } from "@/constants/api";
import { Filter } from "@/lib/api/types/schema";
import { createQueryString } from "@/utils/createQueryString";

interface FoodCardListProps {
  filters: Filter[];
}

export function FoodCardList({ filters }: FoodCardListProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const foodCategories = searchParams.getAll("food_category");

  return (
    <div className="inline-flex gap-2.5">
      {filters.map((filter) => (
        <Link
          scroll={false}
          key={`food-card-list-${filter.id}`}
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
          <FoodCard
            isActive={foodCategories.includes(filter.id)}
            imageSrc={`${BASE_URL}${filter.image_url}`}
            title={filter.name}
          />
        </Link>
      ))}
    </div>
  );
}
