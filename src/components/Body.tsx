import React, { ReactElement, useEffect, useState, KeyboardEvent } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import { RestaurantList } from "../types/restaurant";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Search, SlidersHorizontal } from "lucide-react";


function Body():ReactElement {
  const [resList, setResList] = useState<RestaurantList>([]);
  const [filteredList, setFilteredList] = useState<RestaurantList>([]);
  const [searchText, setSearchText] = useState("");

  //We need to create a component by calling this
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fn = async () => {
      const data = await useFetchRestaurants();
      setResList(data);
      setFilteredList(data);
    };
    fn();
  }, []);

  function handleSearch(): void {
    const arr = resList.filter((res) =>res.name.toLowerCase().includes(searchText.toLowerCase())); //If you simply equate and compare, its an issue
    setFilteredList(arr);
  }

  if (resList.length === 0) {
    return <Shimmer />
  }

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
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button 
            onClick={handleSearch}
            className="absolute right-2 top-2 bottom-2 px-6 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-all cursor-pointer shadow-md">
            Search
          </button>
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
