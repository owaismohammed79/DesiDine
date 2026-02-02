import React, { ReactElement, useEffect, useState, KeyboardEvent } from "react";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import { RestaurantList } from "../types/restaurant";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";


function Body():ReactElement {
  const [resList, setResList] = useState<RestaurantList>([]);
  const [filteredList, setFilteredList] = useState<RestaurantList>([]);

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
    const inputElement = document.getElementById('search-inpt') as HTMLInputElement | null;
    if(inputElement){
      const val = inputElement.value.trim().toLowerCase()
      const arr = resList.filter((res) => res.name.toString().toLowerCase().includes(val)) //If you simply equate and compare, its an issue
      setFilteredList(arr);
    }
  }

  if (resList.length === 0) {
    return <div>Loading restaurants...</div>;
  }

  return (
    <div className="my-5">
      <div className="flex-center mb-3">
        <input
          id="search-inpt"
          type="text"
          placeholder="Mc Donald's"
          className="border rounded p-1 w-72"
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              handleSearch();
            }}}
        />
        <button className="bg-slate-100 px-4 py-1 rounded mx-2 cursor-pointer" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {filteredList.map((res) => res.promoted ? <PromotedRestaurantCard res={res} key={res.id} /> :   <RestaurantCard res={res} key={res.id} />)
        }
      </div>
    </div>
  );
}

export default Body;
