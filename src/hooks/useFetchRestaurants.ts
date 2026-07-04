import React from "react";
import { RestaurantList } from "../types/restaurant";

const useFetchRestaurants = async (): Promise<[] | RestaurantList> => {
    let res = await fetch('https://foodfire.onrender.com/api/restaurants?lat=12.959913533262798&lng=77.5499909&page_type=DESKTOP_WEB_LISTING')
    res = await res.json();

    const restaurantCard = res?.data?.cards?.find((c) => c.card?.card?.id === "top_brands_for_you");
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
            promoted: res.info?.promoted ?? false,
            imgUrl: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + res.info.cloudinaryImageId,
            cuisines: res.info.cuisines,
            costForTwo: res.info.costForTwo,
            deliveryTime: res.info.sla.deliveryTime ? res.info.sla.deliveryTime : res.info.sla.slaString
        }
    })
    // console.log('ans', ans)
    return ans;
}

export default useFetchRestaurants