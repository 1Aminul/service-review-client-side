import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../../useTitle';
import CommentBox from './CommentBox';

const Details = () => {
    Title('detail & review')
    const {user} = useContext(AuthContext)
    const {_id, name, photoURL, about} = useLoaderData()

    const [reviews, setReviews] = useState([])
    
    

    const now = new Date();
    const date = now.getDate()
    const withPmAm = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
    const nameOfMonthUS = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(
        new Date(),
      );
      
    let time = `${date} ${nameOfMonthUS} ${withPmAm}`
   

    const handlerReview = (e)=>{
        e.preventDefault()
        const review = e.target.review.value;
      
        const comment = {
            id: _id,
            name: user?.displayName,
            serviceName: name,
            photoURL: user?.photoURL,
            email: user?.email,
            review,
            time
        }
        fetch(`https://service-review-server-sand.vercel.app/reviews`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(comment)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Your Review added successfully')
            }
        })  
    }

    useEffect(()=>{
        fetch(`https://service-review-server-sand.vercel.app/reviews`)
        .then(res=> res.json())
        .then(data=> {
          
            const comment = data.filter(review=> review.id === _id);
            setReviews(comment)  
        })
    },[_id])





    return (
        <div className='my-10 grid lg:grid-cols-2  w-3/4 mx-auto gap-10'>
            <div className="card card-compact w-96 bg-gray-800 text-white shadow-2xl">
                <figure><img src={photoURL} className="w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <p className='text-xl text-justify'>{about}</p>
                    <div className="card-actions justify-end">
                    <Link to='/services'><button className="btn btn-primary">Go Back</button></Link>
                    </div>
                </div>
            </div>

            <div className='w-full'>
               <div>
                        {
                            user?.email ?
                            <>
                                <h2 className="text-3xl font-bold text-center text-primary mb-3">Please write your Review</h2>
                                <form onSubmit={handlerReview}>
                                    <textarea name='review' className="textarea textarea-bordered h-24 w-full" placeholder="write your review"></textarea>
                                    <button className='btn btn-success text-white'>Add Review</button>
                                </form>
                            </>:
                           <>
                            <p className='text-3xl text-red-600 font-bold'>Please Login to add a review!!!!!!!!!!</p>
                            <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                           </>
                        }
               </div>
               <div className=' p-5 my-5'>
                 {
                    reviews.map(comment=> <CommentBox
                    key={comment._id}
                    comment = {comment}
                    ></CommentBox>)
                 }
               </div>
            </div>
        </div>
    );
};

export default Details;