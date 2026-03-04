import { ReactElement } from "react";
import { Restaurant } from "../types/restaurant";
import { Link } from "react-router";
import { Star, MapPin, Clock } from "lucide-react";

const RestaurantCard = ({ res }: { res: Restaurant }): ReactElement => {
  return (
    <Link to={`/restaurant/${res.id}`} data-testid="items" className="block">
      <div className="w-72 h-[350px] rounded-2xl shadow-md bg-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-amber-500 overflow-hidden flex flex-col gap-2">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={res.imgUrl}
            alt={res.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="font-bold text-gray-800 text-xl truncate">{res.name}</h2>          
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-md">
              <span>{res.rating}</span>
              <Star size={14} fill="white" />
            </div>            
            <div className="flex items-center gap-1 text-gray-600">
              <Clock size={16} />
              <span>{res.deliveryTime} mins</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
            <MapPin size={16} className="shrink-0" />
            <p className="truncate">{res.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

//This is the most interesting part, when you call this HOC, it returns a callback, so when we call this HOC first, then this returns the callback function, now when we use the callback function later, and pass any props to it, you should realize that we're passing the prop essentially to the callback function here as well and not the HOC function
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-[-8] p-2 bg-black text-white z-10 rounded-t-md rounded-br-md">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
