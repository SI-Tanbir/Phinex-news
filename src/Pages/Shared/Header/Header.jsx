
import React from 'react'


import headerLogo from '../../../assets/logo.png'
import moment from 'moment/moment'

const Header = () => {
  return (
    <div> <img className=' m-auto' src={headerLogo} alt="header_logo" />
        <div className='text-center'>

        <p>Journalism without Fear or Favour</p>
        <p>{moment().format('dddd , MMMM Do YYYY')}</p>


        </div>
       
    </div>
  )
}

export default Header