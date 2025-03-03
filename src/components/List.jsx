import bookone from '../assets/images/bookone.jpg'
import booktwo from '../assets/images/booktwo.jpg'
import bookthree from '../assets/images/bookthree.jpg'
import bookfour from '../assets/images/bookfour.jpg'
import rate from '../assets/images/ratetwo.svg'
import { Link } from 'react-router-dom'
import fuck from '../assets/images/fuck.jpg'

const List = () => {
  const books = [
    {
      id: 1,
      title: "The Richest Man in Babylon",
      author: "George S. Clason",
      image: bookone,
      rate: rate
    },
    {
      id: 2,
      title: "Eat That Frog",
      author: "Brian Tracy",
      image: booktwo,
      rate: rate
    },
    {
      id: 3,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      image: bookthree,
      rate: rate
    },
    {
      id: 4,
      title: "My Teache Fried My Brain",
      author: "Bruce Coville ",
      image: bookfour,
      rate: rate
    },
  ];

  return (
    <section className="px-6 py-8 bg-gray-100 text-gray-800 text-center">
     
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lime-600">
        Why We Love Books
      </h2>
      <div className="text-md md:text-lg max-w-3xl mx-auto">
        Jump-start your book reading by quickly checking through the popular book categories. 
        Over <span className="font-semibold">1000+ books</span> are published by different authors every day. 
        Buy your favorite books on <span className="font-semibold text-lime-500">Lectores</span> today!
      </div>

    
      <div className="flex justify-center mt-4">
        <button className="px-5 py-3 rounded-md bg-transparent border border-lime-400 text-lime-400 text-sm font-semibold hover:bg-lime-400 hover:text-white transition">
          Find out more
        </button>
      </div>

   
      <div className="text-2xl md:text-3xl font-bold mt-15">
        Recommended Books For You
        <div className=' text-sm font-thin text-gray-600 mx-auto'>1000+ books are published by different authors everyday. </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-6 mt-6">
  {books.map((book) => (
    <div
      key={book.id}
      className="bg-white flex flex-col rounded-lg overflow-hidden shadow-sm cursor-pointer hover:scale-[1.01] transition-all w-[230px] h-[300px] mx-auto"
    >
      <div className="flex justify-center mt-5 h-[200px]">
        <img
          src={book.image}
          alt={book.title}
          className="w-[90%] h-full object-contain"
        />
      </div>

      <div className="p-2 flex-1 flex flex-col">
        <h5 className="text-xs sm:text-sm font-bold text-gray-800 text-center">
          {book.title}
        </h5>
        <div className="mt-1 text-xs sm:text-sm text-gray-600 text-center">
          {book.author}
        </div>
        <div className="flex justify-center mt-1">
          <img src={book.rate} alt="rate" className="w-14" />
        </div>
      </div>
    </div>
  ))}
</div>


      <div className='float-right'>
        <Link to="/books" className=' text-lime-600'>See More</Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 p-10 gap-59">
  <img src={fuck} alt="Book Cover" className="w-52 md:w-60 rounded-lg shadow-lg" />

  <div className="text-center flex flex-col w-full md:w-[50%]">
    <h5 className="text-gray-400 text-left">Featured Book of the Week</h5>
    <h1 className="text-gray-700 font-bold text-2xl text-left">
      The Subtle Art of Not Giving a F**k
    </h1>
    <img src={rate} alt="Rating" className="w-28 mx-auto mt-2 mr-805" />
    <p className="text-gray-600 mt-1 text-sm text-left ">
      For decades, we’ve been told that positive thinking is the key to a happy, rich life.
      <strong> "F**k positivity," </strong> Mark Manson says. 
      "Let’s be honest, shit is f**ked and we have to live with it."  
      In his wildly popular blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today.
    </p>
    <button className="w-[150px] h-[35px] rounded-md bg-lime-400 border text-white text-xs font-semibold hover:bg-lime-400 mt-20 hover:text-white transition">
  Read Book
</button>

  </div>
</div>


    </section>
  );
};

export default List;
