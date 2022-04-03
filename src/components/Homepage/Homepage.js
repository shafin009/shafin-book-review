import React from 'react'
import { Link } from 'react-router-dom'
import pic from './review.jpg'


const Homepage = () => {
  return (

    <div>
      <div className='flex justify-between gap-3 items-center'>
        <div className='text-xl font-bold mt-5 ml-5 text-2xl'>
          <h1>Customer Review Sites for 'A Brief History of Time'</h1>
          <p>Written by Tanvir Rahman</p>
        </div>
        <div >
          <img className='w-fit h-96 items-center ml-5' src={pic} alt="" />
        </div>
      </div>
      


    </div>


  );
}

export default Homepage
