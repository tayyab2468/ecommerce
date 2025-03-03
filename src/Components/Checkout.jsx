import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartslice"; // Import clearCart action
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price;
    return total + price * item.quantity;
  }, 0);

  const shippingCharges = 90;
  const estimatedTotal = totalPrice + shippingCharges;

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = () => {
    setPurchaseSuccess(true);
    dispatch(clearCart());

    setTimeout(() => setPurchaseSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8 bg-gray-100 min-h-screen">
      {/* Payment Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 mt-10 text-center text-black">Check Out</h2>

        {/* Fixed: Replaced <a> with <button> */}
        <button 
          onClick={() => navigate("/cart")}
          className="text-blue-600 text-sm underline"
        >
          Back to my bag
        </button>

        {/* Success Message */}
        {purchaseSuccess && (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
            <span className="font-medium">Success!</span> Purchase completed successfully.
          </div>
        )}

        <h3 className="font-bold text-lg text-black mt-6">Payment Method</h3>
        <div className="mt-2 space-y-2">
          {["Credit Card", "PayPal", "Cash on Delivery"].map((method) => (
            <label key={method} className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="payment" 
                value={method} 
                checked={paymentMethod === method} 
                onChange={() => setPaymentMethod(method)}
                className="form-radio"
              />
              <span className="text-black">{method}</span>
            </label>
          ))}
        </div>

        {/* Card Details (Only if Credit Card is selected) */}
        {paymentMethod === "Credit Card" && (
          <div className="mt-6 space-y-4">
            <input type="text" placeholder="Name on Card" className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Card Number" className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400" />
            <div className="flex space-x-4">
              <input type="text" placeholder="Expiry Date" className="w-1/2 border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="CVC" className="w-1/2 border rounded px-4 py-2 focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
        )}

        <button 
          onClick={handlePurchase} 
          className="w-full bg-black text-white font-semibold py-2 rounded mt-4 hover:bg-gray-800"
        >
          Complete Purchase
        </button>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 lg:mt-0 lg:ml-6">
        <h2 className="text-2xl font-bold mb-4 mt-8 text-black">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Total Items</span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Total Charges</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping Charges</span>
            <span>${shippingCharges}</span>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg text-black">
          <span>Estimated Total</span>
          <span>${estimatedTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
