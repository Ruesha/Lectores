import React, { useState } from 'react';
import HeaderTwo from '../Static/HeaderTwo';
import booksBg from "../assets/images/books.avif";
import bookone from '../assets/images/bookone.jpg';
import booktwo from '../assets/images/booktwo.jpg';
import bookthree from '../assets/images/bookthree.jpg';
import bookfour from '../assets/images/bookfour.jpg';
import rate from '../assets/images/ratetwo.svg';

const Writerhome = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Richest Man in Babylon", author: "George S. Clason", image: bookone, rate: rate },
    { id: 2, title: "Eat That Frog", author: "Brian Tracy", image: booktwo, rate: rate },
    { id: 3, title: "Diary of a Wimpy Kid", author: "Jeff Kinney", image: bookthree, rate: rate },
    { id: 4, title: "My Teacher Fried My Brain", author: "Bruce Coville", image: bookfour, rate: rate },
  ]);
  
  const [newWork, setNewWork] = useState("");
  const [search, setSearch] = useState("");

  const handleAddWork = () => {
    if (newWork.trim()) {
      setBooks([...books, { id: books.length + 1, title: newWork, author: "Unknown", image: bookone, rate: rate }]);
      setNewWork(""); 
    }
  };

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())); 

  return (
    <div style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${booksBg})`,
        minHeight: '100vh'
      }}
    >
      <HeaderTwo />
      <div className='flex flex-col md:flex-row items-start p-7 gap-8'>
        <section className="">
          <h1 className='text-lime-400 text-3xl font-bold mb-4'>My Works</h1>
          <input 
            type="text" 
            placeholder="Search works..." 
            className="border border-gray-300 p-2 mb-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="overflow-y-auto h-[400px] border border-gray-200 rounded-lg p-2">
            <div className="flex flex-col gap-4">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white flex flex-col rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all w-full max-w-xs mx-auto"
                >
                  <img src={book.image} alt={book.title} className="w-[200px] h-40 object-contain" />
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <img src={book.rate} alt="Rating" className="h-4 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="w-full md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-lime-400 text-2xl font-bold mb-4">Add New Work</h2>
          <textarea
            className="border border-lime-300 p-4 w-[930px] h-85 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
            placeholder='Write your works here....'
          ></textarea>
          <button
          onClick={handleAddWork}

            className="mt-4 bg-lime-400 text-white font-medium py-2 px-6 rounded-lg hover:bg-lime-500 transition-colors"
          >
            Save Work
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Writerhome;
