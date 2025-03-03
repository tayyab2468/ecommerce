import React, { useState } from 'react';
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-black text-white fixed font-Poppins flex items-center justify-between h-20 w-full top-0 left-0 px-6">
      <div className='text-lg font-bold ml-4'>Shoose Web</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 text-sm md:text-base lg:text-lg">
        <Link to="/home">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/Addtocart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </ul>

      {/* Cart and User Icons - Always Visible */}
      <div className="flex items-center space-x-6 mr-6">
        {/* Cart Icon */}
        <Link to="/Addtocart" className="relative flex items-center">
          <FaShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

     
         

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setisopen(!isopen)}>
          {isopen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isopen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white shadow-md py-6 px-6 z-50 flex flex-col space-y-6 md:hidden font-Poppins">
          <Link to="/home" className='text-lg block'>Home</Link>
          <Link to="/product" className='text-lg block'>Products</Link>
          <Link to="/Addtocart" className='text-lg block'> Cart</Link>
          <Link to="/checkout" className='text-lg block'>Checkout</Link>

          {/* Mobile Cart and User Icons */}
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/Addtocart" className="relative flex items-center space-x-2">
              <FaShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
              <span className='font-Poppins'>My Cart</span>
            </Link>

           
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
