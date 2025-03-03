import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaGoogle, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") return; // Prevent empty subscription

    setSubscribed(true);
    setEmail(""); // Clear input after subscription

    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3 seconds
  };

  return (
    <footer className="relative bg-cover bg-center text-white bg-black py-12">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-2xl font-bold">Shoose Website</h2>
            <p className="mt-2 text-sm">Enter Your Email*</p>
            <div className="mt-3 flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-auto flex-1 p-2 border-b border-white bg-transparent outline-none text-sm"
              />
              <button 
                onClick={handleSubscribe} 
                className="bg-black px-4 py-2 text-white text-sm rounded-md hover:bg-gray-400 transition"
              >
                Subscribe
              </button>
            </div>

            {/* Success Message */}
            {subscribed && (
              <div className="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium">Success!</span> Successfully subscribed.
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left space-y-7">
            <h3 className="text-lg font-semibold">Shoose</h3>
            <p className="text-sm mt-2">Phone: +923087133907</p>
            <p className="text-sm">Email: shooseweb@gmail.com</p>
            <p className="text-sm">Address: 34-C Gulshan Karachi</p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
              <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-700" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-500" />
              <FaGoogle className="text-2xl cursor-pointer hover:text-yellow-500" />
              <FaBehance className="text-2xl cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* Recent News */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">RECENT NEWS</h3>
            <ul className="mt-2 space-x-4 flex text-sm">
  <Link to="/product" className="hover:underline cursor-pointer">Products</Link>
  <Link to="/Addtocart" className="hover:underline cursor-pointer">Cart</Link>
  <Link to="/checkout" className="hover:underline cursor-pointer">Checkout</Link>
</ul>
          </div>

        </div> 

        {/* Copyright */}
        <div className="text-center text-xs mt-8">
          © Copyright 2024 Shoose Website - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
