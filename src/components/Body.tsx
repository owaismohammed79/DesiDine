import React, { ReactElement, useMemo, useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Search } from "lucide-react";
import useDebounce from "../hooks/useDebounce";
import { useGetRestaurantsQuery } from "../store/restaurantApi";


function Body():ReactElement {
  const {data: resList = [], isLoading, isError, isUninitialized } = useGetRestaurantsQuery();
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500)

  //We need to create a component by calling this
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  const filteredList = useMemo(() => {
    //Remember ke useMemo me either we've to return a val or mutate
    if (!debouncedSearchText || !resList) return resList;
    
    return resList.filter((res) =>
      res.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) //If you simply equate and compare, its an issue
    );
  }, [debouncedSearchText, resList])

  if (isLoading || isUninitialized) {
    return <Shimmer />
  }

  if(isError) return <div className="text-center py-20 text-xl font-bold text-red-500">Failed to load restaurants</div>;

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="relative w-full max-w-xl group mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-amber-500 group-focus-within:text-amber-700">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full pl-12 pr-32 py-4 bg-white border border-amber-100 rounded-2xl shadow-sm focus:shadow-xl focus:border-amber-400 focus:outline-none transition-all text-gray-700 text-lg placeholder:text-amber-200"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center justify-center">
        {filteredList.map((res) => 
          res.promoted ? (
            <PromotedRestaurantCard res={res} key={res.id} />
          ) : (
            <RestaurantCard res={res} key={res.id} />
          )
        )}
      </div>
      {filteredList.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-amber-900/40">No restaurants found</h2>
        </div>
      )}
    </div>
  );
}

export default Body;
