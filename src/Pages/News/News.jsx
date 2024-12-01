
import React from 'react'
import { useLocation, useParams } from 'react-router'

const News = () => {
    const location = useLocation();
    const { image_url, details } = location.state || {}; // Safely access the state


    const { id } = useParams()
    console.log( image_url)

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