import React from 'react'
import Banner from './Banner'
import Topseller from './Topseller'
import Recomended from './Recommened'
import News from './News'

function Home() {
  return (
    <div>       
      <Banner></Banner>
      <Topseller></Topseller>
      <Recomended></Recomended>
      <News></News>  
    </div>
  )
}

export default Home
