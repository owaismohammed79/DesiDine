import React from "react";
import { RestaurantList } from "../types/restaurant";

const useFetchRestaurants = async (): Promise<[] | RestaurantList> => {
    let res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9587457&lng=77.5511944&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    res = await res.json();
    console.log(res)

    const restaurantCard = res?.data?.cards?.find((c) => c.card?.card?.id === "restaurant_grid_listing_v2");
    const restaurantList = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (!restaurantList) {
        console.log("Restaurant list not found in API response");
        return [];
    }
    const ans = restaurantList.map((res) => {
        return {
            id: res.info.id,
            name: res.info.name,
            rating: res.info.avgRating,
            location: res.info.areaName,
            imgUrl: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + res.info.cloudinaryImageId
        }
    })
    return ans;
}

export default useFetchRestaurants