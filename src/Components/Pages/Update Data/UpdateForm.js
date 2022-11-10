import React, {useState} from 'react';
import toast from 'react-hot-toast'
import { useLoaderData } from 'react-router-dom';
import Title from '../../useTitle';

const UpdateForm = () => {
    Title('update review')
    const datas = useLoaderData()


   const [review, setReview] = useState(datas) 
    
   const updateReview = (e)=>{
    e.preventDefault()
   
    fetch(`https://service-review-server-sand.vercel.app/reviews/${datas._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(review)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.mmatchedCount > 0){
            toast.success('Your Review is update')
        }

    })
    .catch(error => console.log(error))
}

    const handleChange = (event)=>{
       const field = event.target.name;
       const value = event.target.value;
       const newUser = {...review}
       newUser[field] = value;
       setReview(newUser)   
    }


    return (
        <div className='w-1/2 mx-auto my-10'>
            <form onSubmit={updateReview}>
            <textarea onChange={handleChange} name='review' defaultValue={datas.review} className="textarea textarea-bordered h-24 w-full" placeholder="write your review"></textarea>
            <button className='btn btn-success text-white'>Update Review</button>
        </form>
        </div>
    );
};

export default UpdateForm;