import React from 'react';

const HomeReview = (props) => {

    const { blog, name, picture, Ratings } = props.review;

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top rounded-3 w-auto h-50 p-3" alt="..." />
                    <div className="card-body">

                        <p className="card-text"><span className="fw-bold">Review:</span> {blog}</p>
                        <hr />
                        <br />
                        <h5 className="card-title"><span className="fw-bold">Reviewed By:</span> {name}</h5>
                        <p className="card-text"><span className="fw-bold">Ratings:</span> {Ratings}</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;