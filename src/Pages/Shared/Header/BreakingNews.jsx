
import React from 'react'
import Marquee from "react-fast-marquee";



const BreakingNews = () => {
  return (
    <div className='flex'>
        <button className='btn bg-purple-600 text-white'>Breaking News</button>
        <Marquee className='bg-slate-100 ' pauseOnHover={true}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
    </div>
  )
}

export default BreakingNews