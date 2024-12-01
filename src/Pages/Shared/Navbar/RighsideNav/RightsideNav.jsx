
import React from 'react'

import img1 from '../../../../assets/swimming.png';
import img2 from '../../../../assets/class.png';
import img3 from '../../../../assets/playground.png';

const RightsideNav = () => {
  return (
    <div>
      <div> 
        <div>
        <h3 className='font-bold'>Login With</h3>
          <button className='w-full btn bg-slate-50 my-4 border border-blue-600 '>Log With Google</button>
          <button  className='w-full btn bg-slate-50  border border-blue-600 '>Log With Github</button>
        
        </div>

        <div>
          <h3 className='text-xl mt-4 font-bold'>Find Us On</h3>

          <div className=''>
            <ul>
            <li className='border rounded-t-md p-3'><a>Facebook</a></li>
            <li className='border p-3'><a>Instragram</a></li>
            <li className='border rounded-b-md p-3'><a>Twiteer</a></li>
            
           
            </ul>
            

          </div>

          <div>
<h3>Q-Zone</h3>
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />

          </div>

        </div>



      </div>
    </div>
  )
}

export default RightsideNav