import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function ListItems({ category, isOpen }) {
  const dispatch = useDispatch();

  function addToCart(item) {
    dispatch(addItem(item));
  }

  return (
    isOpen && (
      <div className="grid gap-4">
        {category.items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-4 border rounded flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{item.card.info.name}</h3>
              <p className="text-sm text-gray-500">
                ₹{item.card.info.price / 100}
              </p>
            </div>
            <div className="relative">
              {item.card.info.imageId && (
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
                />
              )}
              <button
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black text-white px-2 py-1 text-xs rounded-md whitespace-nowrap"
                onClick={() => addToCart(item)}
              >
                Add +{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default ListItems;
