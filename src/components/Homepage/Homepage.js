import React from 'react'
import { Link } from 'react-router-dom'
import pic from './review.jpg'
import HomeReview from '../HomeReview/HomeReview'
import useReviews from '../../Hooks/useReviews';


const Homepage = () => {

  const [reviews, setReviews] = useReviews();



  return (

    <div>
      <div className='flex justify-between gap-3 items-center'>
        <div className='text-xl font-bold mt-5 ml-5 text-2xl'>
          <h1 className='text-3xl text-slate-700 '>Customer Review Sites of a Famous Book.</h1>
          <br />
          <h1 className='text-3xl font-serif'>'A Brief History of Time'</h1>
          <h1 className='text-3xl font-serif'>Author: Stephen Hawking. </h1>
          <br />
          <p className='text-neutral-500 font-mono'><small>Review Collected by Tanvir Rahman.</small></p>
        </div>
        <div >
          <img className='w-fit h-96 items-center mr-5' src={pic} alt="" />
        </div>
      </div>
      <br />
      <br/>
      <h1 className='text-center text-4xl font-serif underline text-stone-700'>Some Great Reviewer</h1>
      <br />
      <div className='container d-flex justify-content-between'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {
            reviews.slice(3, 6).map(review => <HomeReview
              key={review.id}
              review={review}

            ></HomeReview>)
          }

        </div>
      </div>
      <br />
      <br />
      <br />

      <Link to='/reviews'><button className="btn btn-primary d-grid gap-2 col-6 mx-auto" >See All Reviews</button>
      </Link>

    </div>

  );
}

export default Homepage;
