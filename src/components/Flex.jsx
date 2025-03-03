import React from 'react';
import babe from '../assets/images/babe.png';

const Flex = () => {
  return (
  <div className='bg-black flex justify-between'>
  <div className="text-left md:text-left ml-24 mt-16">
          <h1 className="text-3xl font-bold text-white mb-4">
            Express your creativity
          </h1>
          <p className="mt-2 w-[80%] md:w-[60%] text-white">
            Unleash your words like a river carving through stonebold,
            relentless, and free. Your pen isn’t just ink; it’s magic, bending
            reality and weaving dreams. Let your creativity spill onto the page,
            untamed and electric, because the world needs your voice, your
            stories, your fire.
          </p>
          <button className="px-4 py-2 bg-transparent border border-lime-400 rounded-sm text-lime-400 mt-9 hover:bg-lime-400 hover:text-black transition-all duration-300">
            Publish a book
          </button>
        </div>
        <img src={babe} alt="" className='w-[450px]' />
  </div>
  );
};

export default Flex;
