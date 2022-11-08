import React from 'react';
import { FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, photoURL, name, price, about} = service;
    return (
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={photoURL} className="w-full h-full" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-xl text-justify'>{about.length>100 ? about.slice(0, 100)+'...Read More' : about }</p>
                <div className="flex justify-between mt-3">
                 <p className='text-2xl text-secondary mr-16'>$ {price}</p>   
                <Link to = {`/services/${_id}`}><button  className="btn btn-primary">Details <FaArrowRight className='ml-3'></FaArrowRight></button></Link>
                </div>
            </div>
            </div>
        
    );
};

export default ServiceCard;