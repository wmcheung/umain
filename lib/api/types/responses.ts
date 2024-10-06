import type {
  Error,
  Filter,
  OpenStatus,
  PriceRange,
  Restaurant,
} from "./schema";

interface RestaurantsResponse {
  restaurants: Restaurant[];
}

interface FiltersResponse {
  filters: Filter[];
}

type PriceRangeResponse = PriceRange;
type OpenStatusResponse = OpenStatus;

export type {
  Error,
  RestaurantsResponse,
  FiltersResponse,
  PriceRangeResponse,
  OpenStatusResponse,
};
