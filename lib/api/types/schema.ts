type UUID = string;

interface Error {
  error: boolean;
  reason: string;
}

interface Filter {
  id: UUID;
  name: string;
  image_url: string;
}

interface Restaurant {
  id: UUID;
  name: string;
  rating: number;
  filter_ids: Array<Filter["id"]>;
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

interface PriceRange {
  id: UUID;
  range: string;
}

interface OpenStatus {
  restaurant_id: UUID;
  is_open: boolean;
}

export type { Error, Filter, Restaurant, PriceRange, OpenStatus };
