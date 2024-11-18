import React, { useEffect, useState, startTransition } from 'react';
import BooksCard from '../Books.jsx/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRecoilValue } from 'recoil';
import { getAllBooks } from '../../Recoil/books/bookApi';

const categories = ["Choose a genre", "Fiction", "Horror", "Adventure", "Business"];

function Topseller() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const books = useRecoilValue(getAllBooks);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const [isLoading, setIsLoading] = useState(true); // Track loading status

  // Filter books based on selected category
  const filteredBooks = selectedCategory === "Choose a genre"
    ? books
    : books.filter(book => book.category === selectedCategory.toLowerCase());

  useEffect(() => {
    if (books) setIsLoading(false); // Stop loading once books are fetched
  }, [books]);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    startTransition(() => {
      setSelectedCategory(selected);
      setIsLoading(true); // Set loading while filtering
    });
  };

  return (
    <div>
      <div>
        <h2 className='text-2xl font-semibold m-6'>Top Seller</h2>
      </div>
      <div className='m-6 '>
        
        {/* Category Filtering */}
        <select
          onChange={handleCategoryChange}
          name="category"
          id="category"
          className='border-gray-200 bg-gray-200 rounded p-1'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        
        {/* Swiper for displaying books */}
        <div className='pt-6'>
           
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 2, spaceBetween: 50 },
                1180: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <SwiperSlide key={index}>
                    <BooksCard book={book} />
                  </SwiperSlide>
                ))
              ) : (
                <p>No books found</p>
              )}
            </Swiper>
          
        </div>
      </div>
    </div>
  );
}

export default Topseller;


// This error generally occurs in React 18 when a component suspends ( delays rendering until data is available) 
//while handling synchronous user input(Topseller component, the synchronous user input is the onChange event triggered by the select dropdown menu when the user chooses a category)
//. React advises handling such suspensions within startTransition to prevent UI disruptions(व्यवधान).
// Here’s how you can adjust your code to wrap updates in startTransition, addressing the error.

// Wrap category selection with startTransition: When updating the category,
// it’s helpful to tell React to treat the update as a “non-urgent” transition. 
//This way, if data is loading, it won’t interfere with synchronous user interactions.

// Set isLoading in useEffect: When data is fetched, manage loading with a separate effect