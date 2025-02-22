import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import image1 from "../Components/microsoft-logo.png";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMicrosoftDropdownOpen, setIsMicrosoftDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black font-Poppins flex items-center h-16 w-full px-6 md:px-9 relative shadow-md">
      {/* Microsoft Logo */}
      <img src={image1} alt="Microsoft Logo" className="w-16 md:w-32 lg:w-40" />

      {/* Vertical Divider */}
      <div className="h-6 border-l-[1px] border-black ml-4 hidden md:block"></div>

      {/* Microsoft 365 Title */}
      <Link to="/microsoft356" className="font-bold ml-4 md:ml-10 text-black hidden md:block">
        Microsoft 365
      </Link>

      {/* Desktop Navbar Links */}
      <ul className="hidden md:flex font-Poppins text-sm gap-5 ml-16">
        {/* Products Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            className="flex items-center hover:text-blue-500 transition"
          >
            Products <FaChevronDown className="ml-1" />
          </button>
          {isProductsDropdownOpen && (
            <div className="absolute left-0 mt-2 w-[90vw] md:w-[1100px] bg-white shadow-lg rounded-md p-4 grid grid-cols-1 md:grid-cols-3 gap-x-10 z-50">
              {/* Column 1 */}
              <div className="space-y-3">
                <h1 className="font-bold px-4 py-2">For Home</h1>
                <Link to="/office" className="block px-4 py-1 hover:bg-gray-200">Pricing for Home</Link>
                <Link to="/windows" className="block px-4 py-1 hover:bg-gray-200">For Families</Link>
                <Link to="/xbox" className="block px-4 py-1 hover:bg-gray-200">For Individuals</Link>
                <Link to="/students" className="block px-4 py-1 hover:bg-gray-200">For Students</Link>
                <Link to="/see-all-home" className="block px-4 py-1 hover:bg-gray-200">See all Home</Link>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-3">
                <h1 className="font-bold px-4 py-2">For Business</h1>
                <Link to="/business-pricing" className="block px-4 py-1 hover:bg-gray-200">Pricing for Business</Link>
                <Link to="/small-business" className="block px-4 py-1 hover:bg-gray-200">For Small Business</Link>
                <h1 className="font-bold px-4 py-2 mt-6">For Enterprise</h1>
                <Link to="/enterprise-pricing" className="block px-4 py-1 hover:bg-gray-200">Pricing for Enterprise</Link>
                <Link to="/enterprise" className="block px-4 py-1 hover:bg-gray-200">For Enterprise</Link>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <h1 className="font-bold px-4 py-2">Apps & Services</h1>
                <Link to="/copilot" className="block px-4 py-1 hover:bg-gray-200">Microsoft 365 Copilot</Link>
                <Link to="/excel" className="block px-4 py-1 hover:bg-gray-200">Excel</Link>
                <Link to="/teams" className="block px-4 py-1 hover:bg-gray-200">Microsoft Teams</Link>
                <Link to="/word" className="block px-4 py-1 hover:bg-gray-200">Word</Link>
                <Link to="/onedrive" className="block px-4 py-1 hover:bg-gray-200">OneDrive</Link>
              </div>
            </div>
          )}
        </li>

        <li><Link to="/plans-and-pricing">Plans and pricing</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden ml-auto text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Right Section (Search & Sign-In) */}
      <ul className="hidden md:flex items-center font-Poppins text-sm gap-6 ml-auto">
        <li>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="flex items-center hover:text-black">
            <FaSearch className="mr-2" /> Search
          </button>
        </li>
        <li>
          <Link to="/sign-in" className="flex items-center hover:text-black">
            <FaUser className="mr-2" /> Sign in
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 px-6 z-50">
          <ul className="flex flex-col gap-5">
            <li><Link to="/microsoft365" className="block py-2 hover:underline">Microsoft 365</Link></li>
            <li>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="w-full text-left flex justify-between items-center py-2 hover:underline"
              >
                Products <FaChevronDown />
              </button>
              {isProductsDropdownOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link to="/office" className="block py-1 hover:bg-gray-200">Pricing for Home</Link>
                  <Link to="/windows" className="block py-1 hover:bg-gray-200">For Families</Link>
                </div>
              )}
            </li>
            <li><Link to="/pricing" className="block py-2 hover:underline">Plans and Pricing</Link></li>
            <li><Link to="/resources" className="block py-2 hover:underline">Resources</Link></li>
            <li><Link to="/support" className="block py-2 hover:underline">Support</Link></li>
            <li>
              <Link to="/sign-in" className="block py-2 flex items-center hover:underline">
                <FaUser className="mr-2" /> Sign in
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
