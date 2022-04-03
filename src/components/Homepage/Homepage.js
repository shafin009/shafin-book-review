import React from 'react'
import { Link } from 'react-router-dom'
import pic from './review.jpg'


const Homepage = () => {
  return (
    <div className='flex justify-between gap-3 '>
      <div className='text-xl font-bold mt-5 ml-5'>
        <h1>Customer Review Sites for Product Reviews</h1>
        <p>Written by Tanvir Rahman</p>
      </div>
      <div >
        <img className='ww-fit h-auto' src={pic} alt="" />
      </div>

    </div>

    
  );
}

export default Homepage
