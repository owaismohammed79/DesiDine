import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

function ListItems({ category, isOpen }) {
  const dispatch = useDispatch();

  function addToCart(item) {
    dispatch(addItem(item));
  }

  function removeFromCart(item) {
    console.log(item)
    dispatch(removeItem(item))
  }

  return (
    isOpen && (
      <div className="grid gap-4">
        {category.items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-4 border rounded-xl flex justify-between bg-amber-400"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
              <p className="text-xl text-gray-500 my-2">
                ₹{item.card.info.price / 100}
              </p>
            </div>
            <div className="relative">
              {item.card.info.imageId && (
                <img
                  className="w-20 h-20 object-cover rounded-md border border-gray-400 shadow-xl"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
                />
              )}
              <button
                className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 bg-black text-white px-2 py-1 text-xs rounded-md whitespace-nowrap w-7 h-7"
                onClick={() => addToCart(item.card.info)}
              >
                +
              </button>
              <button className="absolute bottom-0 left-3/4 -translate-x-1/2 translate-y-1/2 bg-black text-white px-2 py-1 text-xs rounded-md whitespace-nowrap w-7 h-7" onClick={(e) => removeFromCart(item.card.info)}>-</button>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default ListItems;
