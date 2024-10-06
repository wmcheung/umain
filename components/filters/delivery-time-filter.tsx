"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Chip } from "@/components/chip";
import { DELIVERY_TIMES } from "@/constants/delivery-times";
import { createQueryString } from "@/utils/createQueryString";

export function DeliveryTimeFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const deliveryTimes = searchParams.getAll("delivery_time");

  return (
    <div className="flex flex-wrap gap-2">
      {DELIVERY_TIMES.map((time) => (
        <Link
          key={`delivery-time-filter-${time.label}`}
          href={
            pathname +
            "?" +
            createQueryString({
              searchParams,
              name: "delivery_time",
              value: time.range.toString(),
            })
          }
        >
          <Chip
            key={time.label}
            size="large"
            isActive={deliveryTimes.includes(time.range.toString())}
          >
            {time.label}
          </Chip>
        </Link>
      ))}
    </div>
  );
}
