import {ReactElement, useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header():ReactElement {
  const [buttonState, setButtonState] = useState<"Login" | "Logout">("Login");
  const isOnline = useOnlineStatus()

  return (
    <div className="border h-16 rounded-xl flex justify-between items-center p-2 bg-slate-100 shadow-lg">
      <div className="w-18 border rounded flex overflow-hidden">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--1536x864.jpg"
          alt="logo"
          className="h-full object-cover"
        />
      </div>
      <ul className="flex-center gap-4 h-full">
        <li>
          <Link className="underline" to="/">Home</Link>
        </li>
        <li>
          <Link className="underline" to="/about">About Us</Link>
        </li>
        <li><Link className="underline" to="/contact">Contact Us</Link></li>
        <li><Link className="underline" to="/">Cart</Link></li>
      </ul>
      <div>
        <span className="font-bold m-1">
          {isOnline ? 'Online 🟢': 'Offline 🔴'}
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
