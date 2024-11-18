import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar.png";
import { useRecoilState } from 'recoil';
import { cartState } from '../Recoil/Cart/atom';
import { useAuth } from '../context/AuthContext';
const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Admin Login", href: "/admin" }
];

const Navbar = () => {
  const {currentUser,logOut} =useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useRecoilState(cartState);
   
  const handleLogOut =()=>{
    logOut()
  }

  return (
    <div>
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center md:gap-12 gap-4">
            {/* Left side navigation */}
            <Link to="/">
              <HiMiniBars3CenterLeft className="w-6 size-6 md:ml-5" aria-label="Menu" />
            </Link>
            <div className="flex relative md:w-72 w-40 space-x-2">
              <IoIosSearch className="w-5 absolute md:left-3  left-2 inset-y-2" aria-label="Search Icon" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-slate-300 w-full py-1 sm:px-4 md:px-8 px-6 rounded-md"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="flex items-center md:gap-4">
            {/* Right side navigation */}
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} aria-label="User Menu">
                    <img
                      src={avatarImg}
                      alt="User Avatar"
                      className={`w-7 h-7 rounded-full ${currentUser ? "ring-2 ring-blue-500" : ""}`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40 md:mr-14">
                      <ul>
                        {navigation.map((item) => (
                          <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                            <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link>
                          </li>
                        ))}
                        <li>
                          <button className='block px-4 py-2 text-sm hover:bg-gray-100' onClick={handleLogOut}>Logout</button>
                        </li>
                       </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <FaUser className="w-6 mx-2 size-5" aria-label="Login" />
                </Link>
              )}
            </div>
             <button className="hidden sm:block" aria-label="Favorites">
               <CiHeart className="size-6" />
             </button>
              <Link to="/cart" className="bg-primary p-1 sm:px-6 md:px-10 py-2 flex items-center rounded-lg md:mx-6">
              <FiShoppingCart aria-label="Shopping Cart" />
              <span>{cartItems.length}</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;