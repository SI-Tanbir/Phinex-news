
import React, { useEffect, useState } from 'react'
import categories from '../../../../demo-data/categories.json'

const LeftsideNav = () => {
const [data,setData]=useState([]);

useEffect(()=>{

  setData(categories)
},[])

console.log(data)
  return (
    
    <div>
      <h2>All Catagory</h2>
      {
        data.map(cat=>(
          <div key={cat.id}><h2>{cat.name}</h2></div>
        ))
      }

      <div>


      </div>


    </div>
  )
}

export default LeftsideNav