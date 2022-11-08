import React, {useState, useEffect} from 'react';
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
           <h2>Here Services</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
          {
            limitServices.map(service=> <LimitServiceCard
            key={service._id}
            service = {service}
            ></LimitServiceCard>)
           }
          </div>
        </div>
    );
};

export default LimitService;