import React from 'react'
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"

const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    }
]
function News() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
   
  
   
  
  return (
    <div>
         <h2 className='text-2xl font-semibold m-6'>News</h2>
      
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
            {news.length > 0 ? (
              news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='px-7 flex flex-col sm:flex-row sm:justify-center gap-3  '>
                        <div className=''>
                            <Link to="/">
                               <h3 className=' text-lg font-md hover:text-blue-500'>{item.title}</h3>
                           </Link> 
                           <p className=' max-w-[40ch] text-sm text-gray-600 pt-4'>{item.description}  </p> 
                         </div>
                         <div>
                            <img src={item.image}alt="" className=' object-cover' />
                        </div>
                    </div>
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

export default News