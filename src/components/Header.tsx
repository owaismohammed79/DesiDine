import { ReactElement, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ShoppingCart } from 'lucide-react';
import { useSelector } from "react-redux";

function Header(): ReactElement {
  const [buttonState, setButtonState] = useState<"Login" | "Logout">("Login");
  const isOnline = useOnlineStatus();
  const items = useSelector(state => state.cart.items)
  // console.log('items', items)

  return (
    <div className="border h-16 rounded-full flex justify-between items-center px-4 py-2 bg-slate-100 shadow-lg md:h-20 md:text-lg">
      <div className="w-18 border rounded flex overflow-hidden">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--1536x864.jpg"
          alt="logo"
          className="h-full object-cover"
        />
      </div>
      <ul className="flex-center gap-4 h-full">
        <li>
          <Link className="underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="underline" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="underline" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="relative inline-block underline" to="/cart">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-amber-500  text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </Link>
        </li>
      </ul>
      <div>
        <span className="font-semibold m-1">
          {isOnline ? "Online 🟢" : "Offline 🔴"}
        </span>
        <button
          className="px-4 py-1 bg-slate-200 rounded-md w-24"
          onClick={() => {
            if (buttonState === "Login") setButtonState("Logout");
            else setButtonState("Login");
          }}
        >
          {buttonState}
        </button>
      </div>
    </div>
  );
}

export default Header;
