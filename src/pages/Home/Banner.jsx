import React from 'react'
import bannerImg from "../../assets/banner.png"
function Banner() {
  return (
      <div className='flex flex-col-reverse md:flex-row py-9 justify-between items-center gap-12'>
        <div className='w-1/2' >
           <h1 className='md:text-5xl text-2xl font-medium md:m-7 m-4' >
              New Releases This Week</h1>
             <p className='md:m-7 m-4 w-1/2'>Its time to update your reading list with some of the latest and greatest releases in the literery world.
              From heart pumping thrillers to captivatiog memories this weeks new releases offer somthing for everyone</p>
             <button className='md:ml-7 ml-4 h-7 bg-primary rounded-md h-9 px-6 space-x-1 flex items-center gap-1 hover:bg-yellow-500' 
             >Subscribe</button>
        </div>
      <div >
            <img src={bannerImg} alt="" className='px-5' />
        </div>
         
    </div>

  )
}

export default Banner