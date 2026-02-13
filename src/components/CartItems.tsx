import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

function CartItems() {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch()

    if(items.length === 0) return (<div className="m-4 text-xl font-bold text-center">No Items in Cart!</div>)

  return (
    <>
        <div>
            <button className="bg-black text-white rounded-md px-2 py-1 mt-4 cursor-pointer" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
        <div className="mt-4 grid gap-4">
        {items.map((item) => (
            <div
            key={item.id}
            className="p-4 border rounded flex justify-between"
            >
            <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                    ₹{item.price / 100}
                    <span className="ml-2 text-gray-500">x {item.quantity || 1}</span>
                </p>
                <p className="text-sm font-bold mt-1 text-amber-900">
                    Subtotal: ₹{(item.price / 100) * (item.quantity || 1)}
                </p>
            </div>
            <div className="relative ml-4">
              {item.imageId && (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover rounded-lg border"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    alt={item.name}
                  />
                  <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    {item.quantity || 1}
                  </div>
                </div>
              )}
            </div>
            </div>
        ))}
        </div>
    </>
  );
}

export default CartItems;
