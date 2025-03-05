import React, { useState, useEffect } from 'react';
import Footer from '../Static/Footer';
import booksBg from "../assets/images/books.avif";
import HeaderTwo from '../Static/HeaderTwo';
import empty from '../assets/images/empty.png';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartIsEmpty = cartItems.length === 0;

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(savedCartItems);
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Remove item from cart
  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.title !== itemToRemove.title));
  };

  // Update quantity of an item
  const updateQuantity = (itemToUpdate, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemToUpdate);
      return;
    }

    const updatedCart = cartItems.map(item => 
      item.title === itemToUpdate.title 
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedCart);
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate total with taxes and shipping
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 3.00;
    const tax = subtotal * 0.1; // 10% tax
    return subtotal + shipping + tax;
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${booksBg})`,
      }}
      className="min-h-screen"
    >
      <HeaderTwo />

      <div className="flex flex-col md:flex-row justify-evenly p-6 gap-6 mb-12">
        {/* Cart Section */}
        <section className="bg-gray-50 w-full md:w-[45%] p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

          {cartIsEmpty ? (
            <div className="text-center">
              <img src={empty} alt="Empty cart" className="mx-auto w-32" />
              <p className="mt-3 text-gray-600">There are no books in your cart.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white p-4 rounded-md shadow-sm"
                >
                  <img 
                    src={item.coverUrl} 
                    alt={item.title} 
                    className="w-20 h-28 object-cover rounded-md mr-4" 
                  />
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {Array.isArray(item.authors) ? item.authors.join(", ") : item.authors}
                    </p>
                    <p className="text-lime-600 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-200 p-2 rounded-l-md disabled:opacity-50"
                    >
                      <FaMinus />
                    </button>
                    <span className="bg-gray-100 px-4 py-2">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className="bg-gray-200 p-2 rounded-r-md"
                    >
                      <FaPlus />
                    </button>
                    
                    <button 
                      onClick={() => removeFromCart(item)}
                      className="ml-4 text-red-500 hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Checkout Section (Only Show When Cart Has Items) */}
        {!cartIsEmpty && (
          <section className="bg-gray-50 rounded-md w-full md:w-[25%] p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>

            {/* Promo Code Input */}
            <div className="flex">
              <input
                type="text"
                placeholder="Promo code"
                className="px-3 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-lime-400 bg-white w-full"
              />
              <button className="rounded-r-md bg-lime-400 px-4 py-2 text-white font-semibold hover:bg-lime-500 transition">
                Apply
              </button>
            </div>

            {/* Price Breakdown */}
            <div className="mt-4 p-4 border-t border-gray-300">
              <div className="flex justify-between py-1">
                <span>Subtotal:</span>
                <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Shipping:</span>
                <span className="font-semibold">$3.00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Tax (10%):</span>
                <span className="font-semibold">${(calculateSubtotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-400 font-bold text-lg">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              className="w-full mt-4 bg-lime-500 text-white py-2 rounded-md hover:bg-lime-600 transition"
            >
              Proceed to Checkout
            </button>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;