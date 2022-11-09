import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LimitServiceCard from './LimitServiceCard';

const LimitService = () => {
    const [limitServices, setLimitServices] = useState([])
    useEffect(()=>{
        fetch(`https://service-review-server-sand.vercel.app/limited`)
        .then(res=> res.json())
        .then(data=> setLimitServices(data))
    }, [])
    return (
        <div className='my-10'>
           <h2 className='text-3xl font-extrabold my-3'>My services</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
          {
            limitServices.map(service=> <LimitServiceCard
            key={service._id}
            service = {service}
            ></LimitServiceCard>)
           }
          </div>
          <Link to='/services'><button className='btn btn-warning w-52 mt-5 text-white text-xl'>See All</button></Link>
        </div>
    );
};

export default LimitService;