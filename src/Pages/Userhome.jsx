import React, { useEffect, useState } from "react";
import Logo from "../assets/images/lectores-removebg-preview.png";
import booksBg from "../assets/images/books.avif";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import loading icon
import { FaSearch } from "react-icons/fa"; // Search icon
import { IoFilterOutline } from "react-icons/io5"; // Filter icon
import {Link} from 'react-router-dom'

const Welcome = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [wantToRead, setWantToRead] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [authorSearchQuery, setAuthorSearchQuery] = useState("");
  const [authorResults, setAuthorResults] = useState([]);
  const [isAuthorSearchOpen, setIsAuthorSearchOpen] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [searchType, setSearchType] = useState("general");
  const [sortOption, setSortOption] = useState("");
  const [isAuthorSearchLoading, setIsAuthorSearchLoading] = useState(false);

 
  useEffect(() => {
    const fetchBooks = async () => {
      if (activeTab === "all") {
        setIsSearchLoading(true);
        
        // Build the search URL based on the search type and parameters
        let url = "https://openlibrary.org/search.json?";
        
        if (searchType === "general" && searchQuery) {
          url += `q=${encodeURIComponent(searchQuery)}`;
        } else if (searchType === "title" && searchQuery) {
          url += `title=${encodeURIComponent(searchQuery)}`;
        } else if (searchType === "author" && selectedAuthor) {
          url += `author=${encodeURIComponent(selectedAuthor)}`;
        } else {
          url += "q=book";
        }
        
        // Add sort option if specified
        if (sortOption) {
          url += `&sort=${sortOption}`;
        }
        
        // Add pagination
        url += `&page=${currentPage}&limit=100`;
        
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          const data = await response.json();
          
          setAllBooks(data.docs || []);
          setFilteredBooks(data.docs || []);
          
          // Calculate total pages
          const total = data.numFound || 0;
          setTotalPages(Math.ceil(total / 100));
        } catch (error) {
          console.error("Fetch error:", error);
          setAllBooks([]);
          setFilteredBooks([]);
        } finally {
          setIsSearchLoading(false);
        }
      }
    };
    
    fetchBooks();
  }, [searchQuery, searchType, selectedAuthor, sortOption, currentPage, activeTab]);

  // Search authors
  const searchAuthors = async () => {
    if (!authorSearchQuery) return;
    
    setIsAuthorSearchLoading(true);
    try {
      const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorSearchQuery)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setAuthorResults(data.docs || []);
    } catch (error) {
      console.error("Author search error:", error);
      setAuthorResults([]);
    } finally {
      setIsAuthorSearchLoading(false);
    }
  };

  // Fetch reading lists from the API
  useEffect(() => {
    const fetchReadingLists = async () => {
      setIsLoading(true);
      try {
        // Fetch all three reading lists in parallel
        const [wantToReadRes, currentlyReadingRes, alreadyReadRes] = await Promise.all([
          fetch("https://openlibrary.org/people/mekBot/books/want-to-read.json"),
          fetch("https://openlibrary.org/people/mekBot/books/currently-reading.json"),
          fetch("https://openlibrary.org/people/mekBot/books/already-read.json")
        ]);

        // Process want to read list
        if (wantToReadRes.ok) {
          const wantToReadData = await wantToReadRes.json();
          setWantToRead(wantToReadData.reading_log_entries || []);
        }

        // Process currently reading list
        if (currentlyReadingRes.ok) {
          const currentlyReadingData = await currentlyReadingRes.json();
          setCurrentlyReading(currentlyReadingData.reading_log_entries || []);
        }

        // Process already read list
        if (alreadyReadRes.ok) {
          const alreadyReadData = await alreadyReadRes.json();
          setAlreadyRead(alreadyReadData.reading_log_entries || []);
        }
      } catch (error) {
        console.error("Error fetching reading lists:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReadingLists();
  }, []);

  // Add to cart
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Get active list based on selected tab
  const getActiveList = () => {
    switch (activeTab) {
      case "want-to-read":
        return wantToRead;
      case "currently-reading":
        return currentlyReading;
      case "already-read":
        return alreadyRead;
      default:
        return filteredBooks;
    }
  };

  // Helper to get a friendly display name for the tabs
  const getTabDisplayName = (tabName) => {
    switch (tabName) {
      case "want-to-read":
        return "Want to Read";
      case "currently-reading":
        return "Currently Reading";
      case "already-read":
        return "Already Read";
      default:
        return "All Books";
    }
  };

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
    // The actual search is triggered by the useEffect
  };

  // Select an author from search results
  const handleSelectAuthor = (author) => {
    setSelectedAuthor(author.name);
    setSearchType("author");
    setIsAuthorSearchOpen(false);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0); // Scroll to top when changing pages
    }
  };

  // Reset search filters
  const resetSearch = () => {
    setSearchQuery("");
    setSelectedAuthor("");
    setSearchType("general");
    setSortOption("");
    setCurrentPage(1);
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center h-64">
      <AiOutlineLoading3Quarters className="animate-spin text-lime-500 text-4xl mb-2" />
      <p className="text-gray-600">Loading books...</p>
    </div>
  );

  // Function to render book card
  const renderBookCard = (book, isReadingList = false) => {
    // For reading lists, the book info is nested differently
    const bookInfo = isReadingList ? book.work : book;
    const title = isReadingList ? bookInfo.title : bookInfo.title;
    const authors = isReadingList 
      ? (bookInfo.author_names || ["Unknown Author"]) 
      : (bookInfo.author_name || ["Unknown Author"]);
    
    const coverKey = isReadingList 
      ? (bookInfo.cover_id || null) 
      : (bookInfo.cover_i || null);
    
    const coverUrl = coverKey
      ? `https://covers.openlibrary.org/b/id/${coverKey}-L.jpg`
      : "https://via.placeholder.com/200x300?text=No+Image";

    return (
      <div
        className="border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center"
      >
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <h3 className="text-sm font-semibold mt-2 text-center">{title}</h3>
        <p className="text-xs text-gray-600 text-center">
          {Array.isArray(authors) ? authors.join(", ") : authors}
        </p>
        <button
          onClick={() => addToCart(bookInfo)}
          className="mt-2 bg-lime-500 text-white px-4 py-2 rounded-md text-sm hover:bg-lime-600 transition"
        >
          Add to Cart
        </button>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen pb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${booksBg})`,
      }}
    >
      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <img src={Logo} width={120} alt="Bookstore Logo" />

        {/* Search Bar */}
        <div className="relative flex-grow max-w-lg mx-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for books..."
              className="px-4 py-2 w-[800px] border rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              aria-label="Search for books"
            />
            <button 
              type="submit" 
              className="bg-lime-400 text-white px-4 py-[12.5px] rounded-r-lg hover:bg-lime-600 transition"
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <button
              type="button"
              onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
              className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition flex items-center"
            >
              <IoFilterOutline className="mr-1" />
              <span className="text-sm">Filters</span>
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-2xl">
          {/* Shopping Cart Button */}
          <div className="relative">
            <Link to="/cart" aria-label="Shopping Cart">
              <MdOutlineShoppingCart className="cursor-pointer hover:text-lime-500 transition text-3xl" />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          {/* User Profile Icon */}
          <button aria-label="User Profile">
            <RxAvatar className="cursor-pointer hover:text-lime-500 transition text-[30px] mb-1" />
          </button>
        </div>
      </div>

      {/* Advanced Search Panel */}
      {isAdvancedSearchOpen && (
        <div className="container mx-auto px-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Advanced Search Options</h3>
              <button 
                onClick={resetSearch}
                className="text-sm text-lime-600 hover:text-lime-700"
              >
                Reset All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search By</label>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
                >
                  <option value="general">General</option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
              </div>
              
              {/* Author Search */}
              {searchType === "author" && (
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={selectedAuthor}
                      readOnly
                      placeholder="Select an author..."
                      className="w-full border rounded-l-md px-3 py-2 bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => setIsAuthorSearchOpen(!isAuthorSearchOpen)}
                      className="bg-lime-500 text-white px-3 py-2 rounded-r-md hover:bg-lime-600 transition"
                    >
                      <FaSearch />
                    </button>
                  </div>
                  
                  {/* Author Search Dropdown */}
                  {isAuthorSearchOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                      <div className="p-2">
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={authorSearchQuery}
                            onChange={(e) => setAuthorSearchQuery(e.target.value)}
                            placeholder="Search authors..."
                            className="w-full border rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                          />
                          <button
                            type="button"
                            onClick={searchAuthors}
                            className="bg-lime-500 text-white px-3 py-2 rounded-r-md hover:bg-lime-600 transition text-sm"
                          >
                            <FaSearch />
                          </button>
                        </div>
                      </div>
                      
                      <div className="max-h-48 overflow-y-auto p-2">
                        {isAuthorSearchLoading ? (
                          <div className="flex justify-center p-4">
                            <AiOutlineLoading3Quarters className="animate-spin text-lime-500 text-xl" />
                          </div>
                        ) : authorResults.length > 0 ? (
                          authorResults.map((author) => (
                            <div
                              key={author.key}
                              onClick={() => handleSelectAuthor(author)}
                              className="p-2 hover:bg-gray-100 cursor-pointer rounded-md text-sm"
                            >
                              {author.name} {author.birth_date && `(${author.birth_date}${author.death_date ? ` - ${author.death_date}` : ''})`}
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-center p-2 text-sm">
                            {authorSearchQuery ? "No authors found" : "Search for an author"}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
                >
                  <option value="">Relevance</option>
                  <option value="new">Newest</option>
                  <option value="old">Oldest</option>
                  <option value="title_asc">Title (A-Z)</option>
                  <option value="title_desc">Title (Z-A)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Tabs */}
      <div className="container mx-auto px-6">
        <div className="border-b border-gray-200 mb-4">
          <nav className="flex space-x-8" aria-label="Book Collections">
            {["all", "want-to-read", "currently-reading", "already-read"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-lime-500 text-lime-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {getTabDisplayName(tab)}
                {tab !== "all" && (
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab === "want-to-read" ? wantToRead.length : 
                     tab === "currently-reading" ? currentlyReading.length : 
                     alreadyRead.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Book Grid */}
      <div className="container mx-auto mt-6 px-6 pb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{getTabDisplayName(activeTab)}</h2>
          
          {/* Pagination for All Books tab */}
          {activeTab === "all" && totalPages > 1 && !isSearchLoading && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>
              
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
        
        {/* Show loading spinner based on active tab */}
        {(activeTab === "all" && isSearchLoading) || (activeTab !== "all" && isLoading) ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {getActiveList().length > 0 ? (
              getActiveList().map((book, index) => (
                <div key={index}>
                  {activeTab === "all" 
                    ? renderBookCard(book) 
                    : renderBookCard(book, true)}
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-500">
                {activeTab === "all" 
                  ? "No books found." 
                  : `No books in your ${getTabDisplayName(activeTab).toLowerCase()} list.`}
              </p>
            )}
          </div>
        )}
        
        {/* Bottom Pagination for All Books tab */}
        {activeTab === "all" && totalPages > 1 && !isSearchLoading && getActiveList().length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                First
              </button>
              
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={i}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      currentPage === pageNum
                        ? "bg-lime-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Next
              </button>
              
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Last
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;