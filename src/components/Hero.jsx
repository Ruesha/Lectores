import React from 'react';
import Logo from '../assets/images/lectores2.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div 
            className="h-screen bg-cover bg-center flex flex-col justify-between" 
            style={{ backgroundImage: `url('/src/assets/images/lectoresbg (1).jpg')` }} 
        >
            
            <div className="font-[Quicksand] p-4 flex justify-between items-center bg-transparent w-full">
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
            <div className="flex flex-col items-center text-center text-white px-3 mb-15">
                <div className="text-lg font-bold text-lime-300 uppercase">Sell Your Works</div>
                <h1 className="text-4xl font-extrabold mt-2">
                    The best platform to <span className="text-lime-400">sell</span> your books
                </h1>
                <p className="text-md text-gray-200 mt-3 max-w-lg">
                    Welcome to <span className="font-semibold">Lectores Digital Bookstore!</span> Connect with readers and writers, discover new stories, and share your own. Enjoy the journey!
                </p>
                <a 
                    href="learn-more.html" 
                    className="mt-5 px-5 py-2 bg-lime-400 text-white rounded-md font-semibold hover:bg-lime-500 transition"
                >
                    Learn More
                </a>
            </div>
            <div></div>
        </div>
    );
};

export default Hero;
