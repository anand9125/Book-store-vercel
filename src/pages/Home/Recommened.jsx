import React from 'react'
import { useState ,useEffect} from 'react';
import BooksCard from '../Books.jsx/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRecoilState } from 'recoil';
import { getAllBooks } from '../../Recoil/books/bookApi';

function Recomended() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [books, setBooks] = useRecoilState(getAllBooks);
     
  return (
   <div>
      <h2 className='text-2xl font-semibold m-6'>Recommended for  you</h2>
       <div className='pt-6 px-6 flex flex-col sm:flex-row sm:justify-center'>
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
            {books.length > 0 ? (
              books.slice(8,17).map((book, index) => (
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
  )
}

export default Recomended