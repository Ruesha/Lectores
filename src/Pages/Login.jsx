import React from "react";
import library from "../assets/images/library-with-books.jpg";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 min-h-screen">
      
      <div className="md:w-1/2">
        <img src={library} alt="Library" className="h-screen w-full object-cover" />
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-6">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md w-full shadow-lg">
          <form className="space-y-4">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-bold">Login</h3>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Login to your account and explore a world of possibilities. 
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">User name</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-lime-200"
                  placeholder="Enter user name"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-lime-200"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-lime-400 hover:underline font-semibold">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 hover:bg-lime-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>

            <p className="text-sm mt-8 text-center text-gray-500">
              Don't have an account?
              <a href="#" className="text-lime-400 font-semibold hover:underline ml-1">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

