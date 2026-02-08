import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ListItems from "./ListItems";
import { useState } from "react";

function RestaurantMenu() {
  const { id } = useParams<{ id: string }>();
  const { menuData } = useRestaurantMenu(id);
  const [openCard, setOpenCard] = useState(null);

  if (!menuData) return <div>Loading restaurant data...</div>;

  function handleCardClick(ind){
    setOpenCard(prev => prev === ind ? null : ind) 
  }

  return (
    <div className="p-4">
      {menuData.map((category, index) => (
        <div key={category.id} className="mb-8" onClick={() => handleCardClick(index)}>
          <h2 className="text-xl font-bold border-b-2 pb-2 mb-4">
            {category.title}
          </h2>
          <ListItems category={category} isOpen={openCard == index ? true : false}/>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
