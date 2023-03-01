import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SingleService = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext)
    const params = useParams();
    const [place, setPlace] = useState({});
    const [reviews, setReviews] = useState([]);

    console.log(reviews);

    useEffect(() => {
        fetch(`https://travel-server-black.vercel.app/place/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data);
            })
            .catch(error => {
                console.error(error)
            })
    }, [params])

    useEffect(() => {
        fetch(`https://travel-server-black.vercel.app/reviews/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.error(error)
            })
    }, [params])

    const reviewHandler = event => {
        event.preventDefault()
        const review = event.target.review.value;
        const { displayName, email, photoURL } = user;
        const data = { review, displayName, email, photoURL, place_id: place._id };


        fetch('https://travel-server-black.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                const oldReviews = [...reviews]
                oldReviews.unshift(data)
                setReviews(oldReviews)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto grid gap-10 grid-cols-1 px-5 md:px-0 md:grid-cols-2 mt-10'>
                <img className='cursor-pointer w-full rounded-xl' src={place.img} alt="service" />
                <div>
                    <h2 className="text-4xl font-bold">{place.name}</h2>
                    <p className='mt-2 badge p-3 mb-3'>Guide: {place.guide}</p>
                    <h2 className="text-4xl font-bold red-font mb-3">{place.price}</h2>
                    <p>{place.description}</p>
                    <button className='btn btn-primary mt-8'>Book Now</button>
                </div>
            </div>
            <div className="max-w-7xl mx-5 md:mx-auto p-10 mt-12 mb-20 rounded-xl bg-gray-300">
                <h2 className="text-2xl font-bold mb-5">Reviews</h2>
                {
                    reviews.map(singleReview => {
                        return <div key={singleReview._id} className="alert rounded-xl mb-5">
                            <div className="items-start">
                                <div className="avatar">
                                    <div className="w-14 rounded-xl">
                                        <img src={singleReview.photoURL} alt='user' />
                                    </div>
                                </div>
                                <div className='pl-2'>
                                    <h2 className='text-xl font-bold'>{singleReview.displayName}</h2>
                                    <p>{singleReview.review}</p>
                                </div>
                            </div>
                        </div>
                    }




                    )
                }

                <div className="divider"></div>
                <div>
                    {
                        user ?
                            <form onSubmit={reviewHandler} className='text-right'>
                                <textarea className="textarea textarea-bordered w-full" name='review' placeholder="Review" required></textarea>
                                <button type="submit" className='btn red-border bg-neutral w-full mt-4' >Submit</button>
                            </form>
                            :
                            <div className="alert alert-error rounded-xl bg-red-600/25 text-white shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span color='text-white'>Please login to add a review <Link to='/login' state={{ from: location }} replace className='btn btn-outline btn-sm ml-4'>Login</Link></span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleService;