import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const {name, photoURL, about} = useLoaderData()
    return (
        <div className='my-10'>
            <div className="card card-compact w-1/2 mx-auto bg-base-100 shadow-2xl">
                <figure><img src={photoURL} className="w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <p className='text-2xl text-justify'>{about}</p>
                    <div className="card-actions justify-end">
                    <Link to='/services'><button className="btn btn-primary">Go Back</button></Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Details;