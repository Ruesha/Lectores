import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart, closeCart }) => {
  // Remove item from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Close Button */}
        <button onClick={closeCart} className="text-gray-500 hover:text-gray-800 float-right">
          <AiOutlineClose size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <ul className="space-y-3">
            {cart.map((book, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg` : "https://via.placeholder.com/50"}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <span className="text-sm font-medium">{book.title}</span>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}

        {/* Checkout Button */}
        {cart.length > 0 && (
          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="mt-4 bg-lime-500 text-white px-4 py-2 rounded-md w-full hover:bg-lime-600 transition"
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
