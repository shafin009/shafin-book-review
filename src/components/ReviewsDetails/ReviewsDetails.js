import React from 'react';

const ReviewsDetails = ({ review }) => {



    return (

        <div className="col">
            <div className="card h-100">
                <img src={review.picture} className="card-img-top rounded-3 w-auto h-50 p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {review.name}</h5>
                    <p className="card-text">Blog: {review.blog}</p>
                    <hr />
                    <p className="card-text">Ratings: {review.Ratings}</p>

                </div>
            </div>
        </div>




    );
};


export default ReviewsDetails;