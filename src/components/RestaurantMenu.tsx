import { useParams, useNavigate } from "react-router";
import ListItems from "./ListItems";
import { useState } from "react";
import { ChevronDown, ChevronUp, Star, MoveLeft } from 'lucide-react';
import * as framer from "motion/react";
import { useGetMenuQuery } from "../store/restaurantApi";
const motion = framer.motion || (framer as any).default?.motion;

function RestaurantMenu() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()
  const { data, isLoading, isError, isUninitialized } = useGetMenuQuery(id);
  const [openCard, setOpenCard] = useState(null);
  console.log(data)

  function handleCardClick(ind){
    setOpenCard(prev => prev === ind ? null : ind) 
  }

  function handleBackClick(){
    if(window.history.state && window.history.state.idx > 0) { //This simply checks if the restaurant route is hit directly, then browser
      //doesnt have anything to show, so we can redirect the user to / route
      navigate(-1)
    } else {
      navigate('/', { replace: true }) 
    }
  }

  if(isError) return  <div className="mt-12 text-xl text-center text-red-500">Error Loading data</div>

  if (isLoading || isUninitialized) return <div className="mt-12 text-xl font-semibold text-center">Loading restaurant data...</div>;

  return (
    <div className="w-3/4 mx-auto">
      <motion.button whileHover={{ x: -5 }} transition={{ type: 'spring' }} className="cursor-pointer" onClick={handleBackClick}>
        <MoveLeft />
      </motion.button>
      <div className="text-[32px] font-semibold my-2">{data.name}</div>
      <div className="flex gap-1 px-2 items-center bg-green-600 text-white w-20 justify-center rounded-lg p-1">
        <p className="text-xl">{data.rating}</p>
        <Star fill="white"/>
      </div>
      <div className="border-b-3 rounded-md border-amber-800 my-4"></div>
      <div className="p-4 mx-auto border rounded-3xl my-2">
        {data?.categories.map((category, index) => (
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
