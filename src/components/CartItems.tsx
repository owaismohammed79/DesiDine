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
            <button className="bg-black text-white rounded-md px-2 py-1 mt-4" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
        <div className="mt-4 grid gap-4">
        {items.map((item) => (
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
            <div>
                {item.card.info.imageId && (
                <img
                    className="w-20 h-20 object-cover rounded"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
                />
                )}
            </div>
            </div>
        ))}
        </div>
    </>
  );
}

export default CartItems;
