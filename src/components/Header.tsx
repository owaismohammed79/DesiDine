import {ReactElement, useState} from "react";
import {Link} from "react-router";

function Header():ReactElement {
  const [buttonState, setButtonState] = useState<>("Login");

  return (
    <div className="border-2 h-16 rounded-xl flex justify-between items-center p-2">
      <div className="w-18 border rounded flex overflow-hidden">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--1536x864.jpg"
          alt="logo"
          className="h-full object-cover"
        />
      </div>
      <ul className="flex-center gap-4 h-full">
        <li>
          <Link className="underline" to="/about">About Us</Link>
        </li>
        <li><Link className="underline" to="/contact">Contact Us</Link></li>
        <li><Link className="underline" to="/">Cart</Link></li>
      </ul>
      <button
        className="px-4 py-1 bg-slate-100 rounded-md w-24"
        onClick={() => {
          if (buttonState === "Login") setButtonState("Logout");
          else setButtonState("Login");
        }}
      >
        {buttonState}
      </button>
    </div>
  );
}

export default Header;
