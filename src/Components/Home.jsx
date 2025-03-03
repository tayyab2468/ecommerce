import React from 'react'
import image1 from '../Components/sneakers-removebg-preview.png'
import image2 from '../Components/jogger-removebg-preview.png'
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from  '../Components/Footer';

const TrendingShoes=[
  { name: "Womens Nike Air Max Excee Sneakers", price: "$95.00", image: "https://cdn.media.amplience.net/i/scvl/103699_205674_1?fmt=auto" },
  { name: "Adidas Ultraboost", price: "$149.99", image: "https://onepoint.pk/cdn/shop/files/adidas-ultraboost-shoes-pakistan.jpg?v=1687159228" },
  { name: "Puma RS-X", price: "$119.99", image: "https://bonafide.pk/cdn/shop/files/IMG20240919125914.jpg?v=1727355607" },
  { name: "Converse Chuck 70", price: "$89.99", image: "https://www.side-step.co.za/media/catalog/product/cache/ead79d362eadd98297170252f181cb50/a/l/all512er-converse-chuck-70-squared-egret-black-a06436-v1_jpg.jpg" },
  { name: "New Balance 550", price: "$110.00", image: "https://nb.scene7.com/is/image/NB/bb550ha1_nb_02_i?$pdpflexf2$" },
  { name: "Vans Old Skool", price: "$75.00", image: "https://images-cdn.ubuy.co.in/653846c3a01608317f1598f7-vans-unisex-old-skool-classic-skate.jpg" },
  { name: "Reebok Club C 85", price: "$90.00", image: "https://images-cdn.ubuy.co.in/653846c3a01608317f1598f7-vans-unisex-old-skool-classic-skate.jpg" },
  { name: "Jordan 1 Retro High", price: "$170.00", image: "https://www.kicksandcoffeestore.com/cdn/shop/files/jordan-kids-air-jordan-1-high-retro-high-og-ps-chicago-lost-and-found.webp?v=1714052996&width=1946" }
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="w-full h-auto bg-[#1E293B] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-16 rounded-lg mt-14">
      {/* Left Section: Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Step into Style</h1>
        <p className="text-lg text-white mt-4">Discover our latest collection of sneakers, crafted for comfort and designed for style.</p>
        <Link to='/product'>
  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
    Shop Now
  </button>
</Link>
      </div>
      {/* Right Section: Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0">
        <img src={image1} className="w-40 sm:w-60 md:w-80 lg:w-96 h-auto object-contain mx-2" alt="Sneakers" />
        <img src={image2} className="w-40 sm:w-60 md:w-80 lg:w-96 h-auto object-contain mx-2" alt="Joggers" />
      </div>
    </div>
    {/* Trending Section */}
    <div className="w-full text-center mt-6">
      <h2 className="text-2xl md:text-3xl font-bold text-black">Trending Shoes</h2>
      <p className="text-lg text-gray-700 mt-2">Check out the hottest styles that everyone is raving about</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-16 mt-6">
      {TrendingShoes.map((shoe, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"  onClick={() => navigate(`/product/${encodeURIComponent(shoe.name)}`)}>
          <img src={shoe.image} className="w-full h-48 object-contain" alt={shoe.name} />
          <h3 className="text-lg font-bold mt-2 text-black">{shoe.name}</h3>
          <p className="text-gray-500">{shoe.price}</p>
          <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      ))}
    </div>
    <Footer />
  </>
);
};

export default Home;
