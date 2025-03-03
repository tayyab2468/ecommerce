import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const shoes = [
  { id: 1, name: "Nike Air Force 1", category: "Sneakers", price: 110.0, image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/17/9-1100x1100.jpg" },
  { id: 2, name: "Adidas Stan Smith", category: "Sneakers", price: 100.0, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0fdbcc2e73074cca8ac5af170059c3d9_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM1.jpg" },
  { id: 3, name: "Allen Edmonds Park Avenue", category: "Formal", price: 395.0, image: "https://www.allenedmonds.com/blob/product-images/39099/ec/45/00182/ec4500182_single_feed1000.jpg" },
  { id: 4, name: "Clarks Tilden Cap", category: "Formal", price: 90.0, image: "https://cdn11.bigcommerce.com/s-er8z3d0e53/images/stencil/original/products/26653/48281/tilden_cap_blk_2__83708.1566584707.PNG?c=2&imbypass=on&imbypass=on" },
  { id: 5, name: "Nike ZoomX Vaporfly", category: "Sports", price: 250.0, image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/12/12-1100x1100.jpg" },
  { id: 6, name: "Adidas Adizero Boston 12", category: "Sports", price: 160.0, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilnJuFODtyzYa5uhzRRNIcOhcC4qc5jEReAPj_klwnnvo5Ohjwlu1nDrEIsLXB_-dKxsljiDWCMfzQKigfnW5a8ok9I2CSn73mZ6JHhc3kmwfHm720wv4CMVsxJzB7Q7MSRF8Ia73It5pxItFz8OXUHu85FnvwnlySnZeiyn0Kn6z3afEbVD-zcseTQdl5/s1200-rw/IMG20230820123826~3_resized.jpg" },
  { id: 7, name: "Vans Classic Slip-On", category: "Casual", price: 60.0, image: "https://images.vans.com/is/image/Vans/VN000EYEBWW-ALT1?wid=1000&hei=1000&fmt=jpg&qlt=70" },
  { id: 8, name: "Converse Chuck Taylor All Star", category: "Casual", price: 65.0, image: "https://images-cdn.ubuy.co.in/65452ad84ae06908af41ee5b-converse-unisex-chuck-taylor-all-star-hi.jpg" }
];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const navigate = useNavigate();

  // Filter & Search
  const filteredShoes = shoes.filter(
    (shoe) => (category === "All" || shoe.category === category) && shoe.name.toLowerCase().includes(query.toLowerCase())
  );

  // Sorting
  const sortedShoes = filteredShoes.sort((a, b) => (sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price));

  return (
    <>
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-8 py-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-black mt-16">Premium Shoes for Every Occasion</h1>
      </div>

      {/* Controls: Search, Sorting, Filtering */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 mb-6">
        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-96 border border-gray-400 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            value={query}
            placeholder="Search shoes..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-black outline-none"
          />
        </div>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 text-black cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Formal">Formal</option>
          <option value="Sports">Sports</option>
          <option value="Casual">Casual</option>
        </select>

        {/* Sorting Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 text-black cursor-pointer"
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Section Title */}
      <div className="text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-black">Elevate Your Look with Our Latest Footwear</h2>
        <p className="text-gray-600 mt-2">Check out the hottest styles everyone is raving about.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 mt-6">
        {sortedShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/product/${encodeURIComponent(shoe.name)}`)}
          >
            <img src={shoe.image} className="w-full h-56 object-contain" alt={shoe.name} />
            <h3 className="text-lg font-bold mt-2 text-center text-black">{shoe.name}</h3>
            <p className="text-black font-semibold text-center mt-1">${shoe.price}</p>
            <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg">Buy Now</button>
            <p className="text-sm text-gray-600 text-center bg-gray-300 px-2 py-1 rounded-full mt-2 inline-block">{shoe.category}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Products;
