import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cartslice";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start p-6 bg-gray-100 min-h-screen">
      {/* Cart Section */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black mt-16 text-center">Shopping Bag</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 space-y-4 sm:space-y-0">
                  
                  {/* Image & Name */}
                  <div className="flex items-center w-full sm:w-auto">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                      <button className="text-red-500 text-sm mt-1" onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center space-x-4">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-gray-300 px-3 py-1 rounded text-lg font-bold">
                      -
                    </button>
                    <span className="font-semibold text-black text-lg">{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-gray-300 px-3 py-1 rounded text-lg font-bold">
                      +
                    </button>
                    <span className="font-semibold text-black text-lg">
                      ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>

                </div>
              ))}
            </div>

            {/* Total Price & Checkout Button */}
            <div className="mt-6 text-center">
              <p className="text-xl font-semibold text-black">Total: ${totalPrice}</p>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
     
    </div>
    
  );
};

export default AddToCart;
