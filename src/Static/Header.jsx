import React from 'react'
import Logo from '../assets/images/lectores-removebg-preview.png';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    
    <div className="font-[Quicksand] p-1 flex justify-between items-center bg-transparent w-full">
    <div>
        <img src={Logo} width={120} alt="Logo" />
    </div>
    <div className="flex gap-4 text-zinc-200 font-semibold text-sm">
        <Link to="/about" className="hover:text-lime-400 transition">About</Link>
        <Link to="/contact" className="hover:text-lime-400 transition">Contact Us</Link>
    </div>
    <div className="flex gap-3">
        <Link to="/login" className="px-3 py-1 rounded-md bg-lime-400 hover:bg-transparent text-white text-sm font-semibold transition-all duration-300 border border-lime-400">
            Login
        </Link>
        <Link to="/signup" className="px-3 py-1 rounded-md bg-transparent border border-lime-400 text-lime-400 text-sm font-semibold hover:bg-lime-400 hover:text-white transition-all duration-300">
            SignUp
        </Link>
    </div>
</div>
  )
}

export default Header
