export interface Restaurant {
  id: string | number;
  name: string;
  imgUrl: string;
  rating: string | number;
  location: string;
}

export type RestaurantList = Restaurant[];