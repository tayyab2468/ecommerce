import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

const shoes = [
  // Sneakers
  { name: "Nike Air Force 1", category: "Sneakers", price: "$110.00", image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/17/9-1100x1100.jpg" },
  { name: "Adidas Stan Smith", category: "Sneakers", price: "$100.00", image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0fdbcc2e73074cca8ac5af170059c3d9_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM1.jpg" },

  // Formal
  { name: "Allen Edmonds Park Avenue", category: "Formal", price: "$395.00", image: "https://www.allenedmonds.com/blob/product-images/39099/ec/45/00182/ec4500182_single_feed1000.jpg" },
  { name: "Clarks Tilden Cap", category: "Formal", price: "$90.00", image: "https://cdn11.bigcommerce.com/s-er8z3d0e53/images/stencil/original/products/26653/48281/tilden_cap_blk_2__83708.1566584707.PNG?c=2&imbypass=on&imbypass=on" },

  // Sports
  { name: "Nike ZoomX Vaporfly", category: "Sports", price: "$250.00", image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/12/12-1100x1100.jpg" },
  { name: "Adidas Adizero Boston 12", category: "Sports", price: "$160.00", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilnJuFODtyzYa5uhzRRNIcOhcC4qc5jEReAPj_klwnnvo5Ohjwlu1nDrEIsLXB_-dKxsljiDWCMfzQKigfnW5a8ok9I2CSn73mZ6JHhc3kmwfHm720wv4CMVsxJzB7Q7MSRF8Ia73It5pxItFz8OXUHu85FnvwnlySnZeiyn0Kn6z3afEbVD-zcseTQdl5/s1200-rw/IMG20230820123826~3_resized.jpg" },

  // Casual
  { name: "Vans Classic Slip-On", category: "Casual", price: "$60.00", image: "https://images.vans.com/is/image/Vans/VN000EYEBWW-ALT1?wid=1000&hei=1000&fmt=jpg&qlt=70" },
  { name: "Converse Chuck Taylor All Star", category: "Casual", price: "$65.00", image: "https://images-cdn.ubuy.co.in/65452ad84ae06908af41ee5b-converse-unisex-chuck-taylor-all-star-hi.jpg" }
];

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering logic
  const filteredShoes =
    selectedCategory === "All"
      ? shoes
      : shoes.filter((shoe) => shoe.category === selectedCategory);

  return (
    <div className="relative p-6">
      {/* Filter Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        <IoFilter size={20} />
        <span>Filter</span>
      </button>

      {/* Dropdown Filter Options */}
      {showFilters && (
        <div className="absolute top-12 left-0 w-52 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
          <h3 className="font-semibold mb-2">Filter by Category</h3>
          <ul className="space-y-2">
            {["All", "Sneakers", "Formal", "Sports", "Casual"].map((category) => (
              <li
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFilters(false);
                }}
                className={`cursor-pointer hover:text-red-500 ${
                  selectedCategory === category ? "text-red-500 font-bold" : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default Filter;
