import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";


const Signup = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleButtonClick = (icon) => {
    setSelectedIcon(icon);
    setShowForm(true);
  };

  return (
<div
  className="flex flex-col items-center justify-center h-screen bg-opacity-100"
  style={{
   
    backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(/src/assets/images/books.avif)"

  }}
>

      {!showForm ? (
        <div className="flex gap-6">
          <button
            className="flex flex-col items-center justify-center gap-3 bg-lime-400 text-white w-40 h-40 text-xl rounded-2xl shadow-lg hover:bg-lime-500 transition"
            onClick={() => handleButtonClick(<TfiWrite size={60} />)}
          >
            <TfiWrite size={40} /> I'm a Writer
          </button>
          <button
            className="flex flex-col items-center justify-center gap-3 bg-lime-400 text-white w-40 h-40 text-xl rounded-2xl shadow-lg hover:bg-lime-500 transition"
            onClick={() => handleButtonClick(<FaBookReader size={60} />)}
          >
            <FaBookReader size={40} /> I'm a Reader
          </button>
        </div>
      ) : (
        <div className="font-[sans-serif] p-4 mt-6">
          <div className="flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(10,175,4,0.3)] p-8 relative mt-12">
              <div className="bg-white w-24 h-24 border-[8px] p-4 absolute left-0 right-0 mx-auto -top-12 rounded-full flex items-center justify-center">
                {selectedIcon}
              </div>

              <form className="mt-12">
                <h3 className="text-xl font-bold text-lime-400 mb-6 text-center">
                  Create free account
                </h3>
                <div className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-lime-300 outline-none transition-all"
                    placeholder="Enter name"
                  />
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-lime-300 outline-none transition-all"
                    placeholder="Enter email"
                  />
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-lime-300 outline-none transition-all"
                    placeholder="Enter password"
                  />
                  <input
                    name="cpassword"
                    type="password"
                    className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-lime-300 outline-none transition-all"
                    placeholder="Enter confirm password"
                  />
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm text-gray-800"
                    >
                      I accept the
                      <a
                        href="#"
                        className="text-lime-400 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wide text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"
                  >
                    Create an account
                  </button>
                </div>
                <p className="text-sm mt-6 text-center text-gray-800">
                  Already have an account?
                  <a
                    href="#"
                    className="text-lime-400 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
   
    </div>
    
  );
};

export default Signup;
