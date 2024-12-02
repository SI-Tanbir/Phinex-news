
import React from 'react'
import { useLocation, useParams } from 'react-router'

const News = () => {
    const location = useLocation();
    const { image_url, details } = location.state || {}; // Safely access the state
// console.log(location.state)

    const { id } = useParams()
    console.log( )

  return (
    <div>

<p>dynamic</p>
<p>user id:{id}</p>
<img src={image_url} alt="" />
<p>{details}</p>


    </div>
  )
}

export default News