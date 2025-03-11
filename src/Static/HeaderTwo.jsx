import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Logo from "../assets/images/lectores-removebg-preview.png";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 mb-5">
     
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-30 " />
     
      </div>


   <div className="flex items-center gap-4">
   {/* Cart & Avatar Section */}
   <Link to={"/cart"} className="flex items-center gap-4">
        <MdOutlineShoppingCart className="text-2xl cursor-pointer hover:text-lime-500 transition" /></Link>
        <Link to={"/userdashboard"}><RxAvatar className="text-2xl cursor-pointer hover:text-lime-500 transition" /></Link>
      
   </div>
   
    </header>
  );
};

export default HeaderTwo;
