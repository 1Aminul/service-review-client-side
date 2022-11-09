import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../../useTitle';

const Details = () => {
    Title('detail & review')
    const {user} = useContext(AuthContext)
    const {name, photoURL, about} = useLoaderData()


    const now = new Date();
    const date = now.getDate()
    console.log(date);
    const current = now.getHours() + ':' + now.getMinutes();
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
        const review = e.target.review.target;
       
        const comment = {
            name: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            review,
            time
        }

    }
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
                            <p className='text-3xl text-red-600 font-bold'>Please Login and give your review!!!!!!!!!!</p>
                        }
               </div>
               <div>
                 
               </div>
            </div>
        </div>
    );
};

export default Details;