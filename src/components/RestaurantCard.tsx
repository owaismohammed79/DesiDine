import { ReactElement } from "react";
import { Restaurant } from "../types/restaurant";
import { Link } from "react-router";

const RestaurantCard = ({ res }: Restaurant): ReactElement => {
  return (
    <Link to={`/restaurant/${res.id}`}>
      <div className="border w-72 rounded-xl h-[31rem] shadow-md bg-gray-100 hover:bg-gray-200 hover:border-amber-800 hover:border-2">
        <div className="overflow-hidden rounded-t-xl h-4/5">
          <img
            src={res.imgUrl}
            alt={res.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-1 text-center h-1/5">
          <h1 className="font-bold text-wrap text-md">{res.name}</h1>
          <p>Rating: {res.rating}</p>
          <p>{res.location}</p>
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
