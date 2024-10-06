import ky from "ky";

import { BASE_URL } from "@/constants/api";

import {
  FiltersResponse,
  OpenStatusResponse,
  PriceRangeResponse,
  RestaurantsResponse,
} from "./types/responses";

const api = ky.create({
  prefixUrl: `${BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
    // without etag the server returns wrong price_range_id's for restaurants.
    // price_range_id's returned does not exist on the backend.
    etag: 'W/"759-yMdPR+OO7z/gpKSA7701E3bjav8"',
  },
});

// Range is a string that looks like "0,30" or "30,60"
function findDeliveryTimeRange(
  range: string,
  restaurantDeliveryTime: number,
): boolean {
  const [min, max] = range.split(",").map(Number);
  return restaurantDeliveryTime >= min && restaurantDeliveryTime <= max;
}

interface GetRestaurantRequest {
  filters?: {
    foodCategories: string | string[];
    deliveryTimes: string | string[];
    priceRanges: string | string[];
  };
}

export const getRestaurants = async (req: GetRestaurantRequest = {}) => {
  const { filters } = req;

  const { restaurants } = await api
    .get<RestaurantsResponse>("restaurants")
    .json();

  const transformRestaurants = await Promise.all(
    restaurants.map(async (restaurant) => {
      const openStatus = await getRestaurantOpenStatus(restaurant.id);
      return {
        ...restaurant,
        isOpen: openStatus.is_open,
      };
    }),
  );

  if (filters) {
    const { foodCategories, deliveryTimes, priceRanges } = filters;

    return transformRestaurants.filter((restaurant) => {
      const matchesFoodCategories =
        foodCategories.length === 0 ||
        restaurant.filter_ids.some((filterId) =>
          foodCategories.includes(filterId),
        );

      const matchesDeliveryTimes =
        deliveryTimes.length === 0 ||
        (Array.isArray(deliveryTimes)
          ? deliveryTimes.some((range) =>
              findDeliveryTimeRange(range, restaurant.delivery_time_minutes),
            )
          : findDeliveryTimeRange(
              deliveryTimes,
              restaurant.delivery_time_minutes,
            ));

      const matchesPriceRanges =
        priceRanges.length === 0 ||
        priceRanges.includes(restaurant.price_range_id);

      return (
        matchesFoodCategories && matchesDeliveryTimes && matchesPriceRanges
      );
    });
  }

  return transformRestaurants;
};

export const getFilters = async () => {
  const data = await api.get<FiltersResponse>("filter").json();
  return data.filters;
};

export const getRestaurantOpenStatus = async (id: string) => {
  return await api.get<OpenStatusResponse>(`open/${id}`).json();
};

export const getPriceRange = async (id: string) => {
  return await api.get<PriceRangeResponse>(`price-range/${id}`).json();
};

export const getPriceRanges = async () => {
  try {
    const { restaurants } = await api
      .get<RestaurantsResponse>("restaurants")
      .json();
    const priceRangesSet = new Set<string>();

    restaurants.forEach((restaurant) => {
      priceRangesSet.add(restaurant.price_range_id);
    });

    const priceRanges = await Promise.all(
      Array.from(priceRangesSet).map((id) => getPriceRange(id)),
    );

    return priceRanges;
  } catch {
    return [];
  }
};
