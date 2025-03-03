import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartslice";

const shoes = [
  { id: 1, name: "Nike Air Force 1", category: "Sneakers", price: 110.0, color: "White", inStock: true, image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/17/9-1100x1100.jpg" },
  { id: 2, name: "Adidas Stan Smith", category: "Sneakers", price: 100.0, color: "Green & White", inStock: true, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0fdbcc2e73074cca8ac5af170059c3d9_9366/Stan_Smith_Lux_Shoes_White_HQ6786_HM1.jpg" },
  { id: 3, name: "Allen Edmonds Park Avenue", category: "Formal", price: 395.0, color: "Black", inStock: false, image: "https://www.allenedmonds.com/blob/product-images/39099/ec/45/00182/ec4500182_single_feed1000.jpg" },
  { id: 4, name: "Clarks Tilden Cap", category: "Formal", price: 90.0, color: "Brown", inStock: true, image: "https://cdn11.bigcommerce.com/s-er8z3d0e53/images/stencil/original/products/26653/48281/tilden_cap_blk_2__83708.1566584707.PNG?c=2&imbypass=on&imbypass=on" },
  { id: 5, name: "Nike ZoomX Vaporfly", category: "Sports", price: 250.0, color: "Red", inStock: false, image: "https://www.hopkicks.pk/image/cache/catalog/2023/APRIL%2023/LARGE%20ORDER/PART%203/12/12-1100x1100.jpg" },
  { id: 6, name: "Adidas Adizero Boston 12", category: "Sports", price: 160.0, color: "Blue", inStock: true, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilnJuFODtyzYa5uhzRRNIcOhcC4qc5jEReAPj_klwnnvo5Ohjwlu1nDrEIsLXB_-dKxsljiDWCMfzQKigfnW5a8ok9I2CSn73mZ6JHhc3kmwfHm720wv4CMVsxJzB7Q7MSRF8Ia73It5pxItFz8OXUHu85FnvwnlySnZeiyn0Kn6z3afEbVD-zcseTQdl5/s1200-rw/IMG20230820123826~3_resized.jpg" },
  { id: 7, name: "Vans Classic Slip-On", category: "Casual", price: 60.0, color: "Black & White", inStock: true, image: "https://images.vans.com/is/image/Vans/VN000EYEBWW-ALT1?wid=1000&hei=1000&fmt=jpg&qlt=70" },
  { id: 8, name: "Converse Chuck Taylor All Star", category: "Casual", price: 65.0, color: "Black", inStock: false, image: "https://images-cdn.ubuy.co.in/65452ad84ae06908af41ee5b-converse-unisex-chuck-taylor-all-star-hi.jpg" },
  { id: 9, name: "Womens Nike Air Max Excee Sneakers", category: "Sneakers", price: 95.0, inStock: true, image: "https://cdn.media.amplience.net/i/scvl/103699_205674_1?fmt=auto" },
  { id: 10, name: "Adidas Ultraboost", category: "Sports", price: 149.99, inStock: true, image: "https://onepoint.pk/cdn/shop/files/adidas-ultraboost-shoes-pakistan.jpg?v=1687159228" },
  { id: 11, name: "Puma RS-X", category: "Casual", price: 119.99, inStock: true, image: "https://bonafide.pk/cdn/shop/files/IMG20240919125914.jpg?v=1727355607" },
  { id: 12, name: "Converse Chuck 70", category: "Casual", price: 89.99, inStock: true, image: "https://www.side-step.co.za/media/catalog/product/cache/ead79d362eadd98297170252f181cb50/a/l/all512er-converse-chuck-70-squared-egret-black-a06436-v1_jpg.jpg" },
  { id: 13, name: "New Balance 550", category: "Sneakers", price: 110.0, inStock: true, image: "https://nb.scene7.com/is/image/NB/bb550ha1_nb_02_i?$pdpflexf2$" },
  { id: 14, name: "Vans Old Skool", category: "Casual", price: 75.0, inStock: true, image: "https://images-cdn.ubuy.co.in/653846c3a01608317f1598f7-vans-unisex-old-skool-classic-skate.jpg" },
  { id: 15, name: "Reebok Club C 85", category: "Casual", price: 90.0, inStock: true, image: "https://images-cdn.ubuy.co.in/653846c3a01608317f1598f7-vans-unisex-old-skool-classic-skate.jpg" },
  { id: 16, name: "Jordan 1 Retro High", category: "Sneakers", price: 170.0, inStock: true, image: "https://www.kicksandcoffeestore.com/cdn/shop/files/jordan-kids-air-jordan-1-high-retro-high-og-ps-chicago-lost-and-found.webp?v=1714052996&width=1946" }
];

const ProductDetails = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = shoes.find((shoe) => shoe.name === decodeURIComponent(name));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center text-red-500 text-2xl">Product not found!</h2>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <button onClick={() => navigate(-1)} className="bg-black text-white px-4 py-2 rounded-lg mb-4 mt-10">← Back</button>
      
      <Zoom>
        <img src={product.image} alt={product.name} className="w-full h-80 object-contain rounded-lg" />
      </Zoom>

      <h1 className="text-3xl font-bold mt-4 text-black">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">Category: {product.category}</p>
      <p className="text-lg text-gray-600 mt-2">Color: {product.color}</p>
      <p className="text-2xl font-semibold mt-2 text-black">${product.price.toFixed(2)}</p>
      <p className={`text-lg mt-2 font-bold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <div className="flex items-center mt-4">
        <button onClick={decreaseQuantity} className="bg-gray-300 px-4 py-2 text-black rounded-l-lg">-</button>
        <span className="px-4 py-2 text-xl text-black">{quantity}</span>
        <button onClick={increaseQuantity} className="bg-gray-300 px-4 py-2 text-black rounded-r-lg">+</button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`mt-5 py-2 px-6 rounded-lg w-full font-semibold ${product.inStock ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ProductDetails;
