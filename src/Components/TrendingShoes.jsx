import React from 'react';

// Sample shoe data
const shoesData = [
  { name: "Nike Air Max", price: "129.99", image: "/images/nike-air-max.png" },
  { name: "Adidas Ultraboost", price: "149.99", image: "/images/adidas-ultraboost.png" },
  { name: "Puma RS-X", price: "119.99", image: "/images/puma-rsx.png" },
  { name: "Converse Chuck 70", price: "89.99", image: "/images/converse-chuck70.png" },
];

const TrendingShoes = () => {
  return (
    <div className="py-28 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-10 ">
        <h1 className="text-3xl font-bold text-gray-900">🔥 Trending Shoes</h1>
        <p className="text-lg text-gray-700 mt-2">Check out the hottest styles that everyone is raving about.</p>
      </div>

      {/* Shoes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {shoesData.map((shoe, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src={shoe.image} alt={shoe.name} className="w-full h-60 object-contain" />
            <h3 className="text-lg font-semibold mt-4">{shoe.name}</h3>
            <p className="text-gray-500">${shoe.price}</p>
            <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingShoes;
