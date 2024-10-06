import { Card } from "@/components/card";
import { DeliveryTimeFilter } from "@/components/filters/delivery-time-filter";
import { FoodFilter } from "@/components/filters/food-filter";
import { PriceRangeFilter } from "@/components/filters/price-range-filter";
import { FoodCardList } from "@/components/food-card-list";
import { Logo } from "@/components/logo";
import { RestaurantCard } from "@/components/restaurant-card";
import { BASE_URL } from "@/constants/api";
import { getFilters, getPriceRanges, getRestaurants } from "@/lib/api";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function getData(searchParams: HomeProps["searchParams"]) {
  const restaurants = await getRestaurants({
    filters: {
      foodCategories: searchParams.food_category ?? [],
      deliveryTimes: searchParams.delivery_time ?? [],
      priceRanges: searchParams.price_range ?? [],
    },
  });
  const filters = await getFilters();
  const priceRanges = await getPriceRanges();

  return {
    restaurants,
    priceRanges,
    filters,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { restaurants, priceRanges, filters } = await getData(searchParams);

  return (
    <div className="px-6 lg:px-10 py-10 lg:py-14">
      <div className="grid grid-cols-4 md:grid-cols-16 gap-0 md:gap-4 space-y-6 md:space-y-12">
        <div className="grid grid-cols-subgrid col-span-4 md:col-span-16">
          <div className="col-span-2 md:col-span-5 lg:col-span-4">
            <Logo dark />
          </div>
        </div>
        <div className="grid grid-cols-subgrid col-span-4 md:col-span-3">
          <Card
            className="col-span-4 border-none m-0 md:border-solid bg-transparent md:bg-white md:space-y-8"
            size="xl"
          >
            <h3 className="hidden md:block text-2xl">Filter</h3>
            <div className="hidden md:block md:space-y-4">
              <h3 className="uppercase text-black/50">Food category</h3>
              <FoodFilter filters={filters} />
            </div>
            <div className="space-y-2.5 md:space-y-4">
              <h3 className="uppercase text-black/50">Delivery time</h3>
              <DeliveryTimeFilter />
            </div>
            <div className="hidden md:block md:space-y-4">
              <h3 className="uppercase text-black/50">Price range</h3>
              <PriceRangeFilter priceRanges={priceRanges} />
            </div>
          </Card>
        </div>
        <div className="flex flex-col col-span-4 md:col-span-12 space-y-6 md:space-y-10">
          <div className="overflow-x-auto w-[calc(100vw-1.5rem)] md:w-[calc(80vw-1.5rem)] pr-6">
            <FoodCardList filters={filters} />
          </div>
          <div className="flex flex-col space-y-5 md:space-y-8">
            <h2 className="text-2xl md:text-3xl">Restaurant&apos;s</h2>
            <div className="flex flex-wrap gap-2.5 md:gap-4">
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  className="w-full md:w-1/4"
                  key={restaurant.id}
                  title={restaurant.name}
                  status={restaurant.isOpen ? "open" : "closed"}
                  deliveryTime={`${restaurant.delivery_time_minutes} min`}
                  imageSrc={`${BASE_URL}${restaurant.image_url}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
