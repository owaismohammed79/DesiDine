import { ReactElement, useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useSelector } from "react-redux";

function Header(): ReactElement {
  const [buttonState, setButtonState] = useState<"Login" | "Logout">("Login");
  const isOnline = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const items = useSelector(state => state.cart.items)
  const itemCount = items.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0);
  // console.log('items', items)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if(isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-4">
        <div className="h-20 flex justify-between items-center px-6 py-2 bg-white/80 backdrop-blur-md shadow-md border border-amber-100 rounded-2xl max-w-[1200px] mx-auto">
          <div className="md:w-1/3">
            <div className="w-18 border rounded flex overflow-hidden">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food--1536x864.jpg"
                alt="logo"
                className="h-full object-cover"
              />
            </div>
          </div>
          <nav className="hidden md:w-1/3 md:flex md:justify-around md:items-center">
            <ul className="flex items-center gap-8 font-medium text-amber-900/80">
              <li className="hover:text-amber-600 transition-colors"><Link to="/">Home</Link></li>
              <li className="hover:text-amber-600 transition-colors"><Link to="/about">About</Link></li>
              <li className="hover:text-amber-600 transition-colors"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="md:w-1/3 flex justify-around md:justify-end items-center gap-2 md:gap-4">
            <Link className="relative p-2 bg-amber-50 rounded-full text-amber-700" to="/cart">
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                  {itemCount}
                </span>
              )}
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isOnline ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {isOnline ? "ONLINE 🟢" : "OFFLINE 🔴"}
              </div>
              <button className="bg-amber-900 text-white px-5 py-2 rounded-xl font-bold" onClick={() => setButtonState(buttonState === "Login" ? "Logout" : "Login")}>
                {buttonState}
              </button>
            </div>

            <button className="md:hidden p-2 text-amber-900" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}></div>
      <div className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white z-[70] shadow-2xl p-8 transform transition-transform duration-300 ease-in-out md:hidden rounded-l-lg ${isMenuOpen ? "translate-x-0" : "translate-x-full invisible"}`}>
        <div className="flex justify-between items-center mb-10">
          <span className="font-black text-2xl text-amber-900">MENU</span>
          <button onClick={toggleMenu} className="p-2 bg-amber-50 rounded-full"><X size={24} /></button>
        </div>
        
        <ul className="flex flex-col gap-6 text-xl font-bold text-amber-950">
          <li onClick={toggleMenu}><Link to="/">Home</Link></li>
          <li onClick={toggleMenu}><Link to="/about">About Us</Link></li>
          <li onClick={toggleMenu}><Link to="/contact">Contact</Link></li>
          <li className="pt-6 border-t border-amber-100">
            <button className="w-full py-4 bg-amber-900 text-white rounded-2xl" onClick={() => { 
                setButtonState(buttonState === "Login" ? "Logout" : "Login") 
              }}>
                {buttonState}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
