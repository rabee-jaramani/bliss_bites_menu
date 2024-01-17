import React from 'react'
import banner_bg from '../images/banner_bg.webp'
import bliss_bites_logo from '../images/bliss_bites_logo.svg'
export default function Banner() {
  return (
    <div className='banner-container'>
        <img className='banner-bg' src={banner_bg}/>
        {/* <img className='logo' src={bliss_bites_logo}/>
        <h2 className='menu-title'>Our Menu</h2> */}
    </div>
  )
}
