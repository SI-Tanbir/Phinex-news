
import React, { useEffect, useState } from 'react'
import categories from '../../../../demo-data/categories.json'
import leftNews from '../../../../demo-data/news.json'

const LeftsideNav = () => {
const [data,setData]=useState([]);
const [news,setNews]=useState([]);


useEffect(()=>{

  setData(categories)
  setNews(leftNews)
},[])

 console.log(news)
  return (
    
    <div>
      <h2>All Catagory</h2>
      {
        data.map(cat=>(
          <div key={cat.id}><h2>{cat.name}</h2></div>
        ))
      }

      <div>

        {/* adding data */}
      {
       news.slice(1,4).map((res,index)=>(<div key={index}>

        <img className='h-[280px]' src={res.thumbnail_url} alt="" />
        <p>{res.title}</p>
       </div>))
        
      }



      </div>


    </div>
  )
}

export default LeftsideNav