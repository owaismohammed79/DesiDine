export interface Restaurant {
  id: string | number;
  name: string;
  imgUrl: string;
  rating: string | number;
  location: string;
  promoted: boolean
}

export type RestaurantList = Restaurant[];