import React, {useContext,useEffect, useState} from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const {user} = useContext(AuthContext)
   const [MyReviews, setMyReviews] = useState([])
   useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> setMyReviews(data) )
   },[user])


    return (
        <div className='my-10'>
            <h2 className="text-4xl font-extrabold mb-3">This is Your Review</h2>
            {
                MyReviews.map(review => <MyReviewRow
                key={review._id}
                comment={review}
                ></MyReviewRow>)
            }
        </div>
    );
};

export default MyReview;