import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../useTitle';

const UpdateForm = () => {
    Title('update review')
    const datas = useLoaderData()
    console.log(datas._id);

   const [review, setReview] = useState({}) 
    
   const updateReview = ()=>{
   
    // fetch(`https://service-review-server-sand.vercel.app/reviews/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(comment)
    // })
    // .then(res=> res.json())
    // .then(data => {
    //     console.log(data)
    //     if(data.modifiedCount > 0){
    //       const d = datas.review
    //       console.log(d);
    //     }

    // })
    // .catch(error => console.log(error))
}

    const handleChange = (e)=>{
        e.preventDefault()
        const comment = e.target.review.value;
        // console.log(comment);
        const newComment = {...review, comment}
        console.log(newComment);
        setReview(newComment)
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