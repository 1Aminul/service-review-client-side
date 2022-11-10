
import React, {useContext,useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../../useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    Title('my reviews')
    const {user} = useContext(AuthContext)
   const [MyReviews, setMyReviews] = useState([])
   useEffect(()=>{
        fetch(`https://service-review-server-sand.vercel.app/reviews?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> setMyReviews(data) )
   },[user])

   const deleteReview = (id)=>{
        fetch(`https://service-review-server-sand.vercel.app/reviews/${id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Review Delete Successfully')
                const remaining = MyReviews.filter(review=> review._id !== id)
                setMyReviews(remaining)
            }
        })
   }


    return (
        <div className='my-10'>
            <h2 className="text-4xl font-extrabold mb-3">This is Your Review</h2>
            <div className="overflow-x-auto w-full">
            <table className="table w-full ">
                
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Service Name</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
                         {
                            MyReviews.map(review => <MyReviewRow
                            key={review._id}
                            comment={review}
                            
                            deleteReview = {deleteReview}
                            ></MyReviewRow>)
                        }
                </tbody>
            </table>
        </div>
         
        </div>
    );
};

export default MyReview;