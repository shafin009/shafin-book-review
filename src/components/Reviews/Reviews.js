import React from 'react';

import useReviews from '../../Hooks/useReviews';
import ReviewsDetails from "../ReviewsDetails/ReviewsDetails"

const Reviews = () => {
    const [reviews, setReviews] = useReviews();



    return (
        <div className='container d-flex justify-content-between'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

                {
                    reviews.map(review => <ReviewsDetails
                        key={review.id}
                        review={review}


                    ></ReviewsDetails>)
                }
            </div>
        </div>
    );
};

export default Reviews;