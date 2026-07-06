import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RestaurantList } from "../types/restaurant";

const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://foodfire.onrender.com/api/'}),
    endpoints: builder => ({
        getRestaurants: builder.query<RestaurantList, void>({
            query: () => 'restaurants?lat=12.959913533262798&lng=77.5499909&page_type=DESKTOP_WEB_LISTING',
            transformResponse: (response: any) => {
                const restaurantCard = response?.data?.cards?.find((c: any) => c.card?.card?.id === "top_brands_for_you")
                const restaurantList = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
                
                if(!restaurantList) return []
                
                return restaurantList.map((res: any) => ({
                id: res.info.id,
                name: res.info.name,
                rating: res.info.avgRating,
                location: res.info.areaName,
                promoted: res.info?.promoted ?? false,
                imgUrl: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.info.cloudinaryImageId}`,
                cuisines: res.info.cuisines,
                costForTwo: res.info.costForTwo,
                deliveryTime: res.info.sla.deliveryTime || res.info.sla.slaString
                }))
            }
        }),
        getMenu: builder.query<any, string>({
            query: (id) => `menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.959913533262798&lng=77.5499909&submitAction=ENTER&restaurantId=${id}`,
            transformResponse: (response: any) => {
                const obj = response?.data?.cards?.find((x: any) => x?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.card?.info;
                const categories = response?.data?.cards
                ?.find((x: any) => x.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter((c: any) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                ?.map((c: any) => ({
                    id: c.card.card.categoryId || c.card.card.title,
                    title: c.card.card.title,
                    items: c.card.card.categories ? c.card.card.categories.flatMap((sub: any) => sub.itemCards) : c.card.card.itemCards
                }));
                
                return { name: obj?.name, rating: obj?.avgRating, categories };
            }
        })
    })
})

export default restaurantApi
export const { useGetRestaurantsQuery, useGetMenuQuery } = restaurantApi