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
          <h1>Customer Review Sites for 'A Brief History of Time'</h1>
          <p>Written by Tanvir Rahman</p>
        </div>
        <div >
          <img className='w-fit h-96 items-center mr-5' src={pic} alt="" />
        </div>
      </div>
      <br />
      <h1 className='text-center text-3xl'>Some Great Reviewer</h1>
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
