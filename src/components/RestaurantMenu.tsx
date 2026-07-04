import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ListItems from "./ListItems";
import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

function RestaurantMenu() {
  const { id } = useParams<{ id: string }>();
  const { menuData } = useRestaurantMenu(id);
  const [openCard, setOpenCard] = useState(null);
  // console.log(menuData)

  if (!menuData) return <div className="mt-12 text-xl font-semibold text-center">Loading restaurant data...</div>;

  function handleCardClick(ind){
    setOpenCard(prev => prev === ind ? null : ind) 
  }

  return (
    <div className="w-3/4 mx-auto">     
      <div className="text-[32px] font-semibold my-2">{menuData.name}</div>
      <div className="flex gap-1 px-2 items-center bg-green-600 text-white w-20 justify-center rounded-lg p-1">
        <p className="text-xl">{menuData.rating}</p>
        <Star fill="white"/>
      </div>
      <div className="border-b-3 rounded-md border-amber-800 my-4"></div>
      <div className="p-4 mx-auto border rounded-3xl my-2">
        {menuData?.categories.map((category, index) => (
          <div key={category.id} className="mb-8 last:mb-0">
            <button className="text-xl font-semibold border-b-2 pb-2 mb-4 w-full text-start flex justify-between" onClick={() => handleCardClick(index)}>
              {category.title}
              <div className="px-2 text-gray-400">
                {openCard === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${openCard === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <ListItems category={category} isOpen={true} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default RestaurantMenu;
