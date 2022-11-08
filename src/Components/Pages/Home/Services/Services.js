import React, {useState, useEffect} from 'react';
import Title from '../../../useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    Title('services')
   const [services, setServices] = useState([])
   useEffect(()=>{
        fetch(`https://service-review-server-sand.vercel.app/services`)
        .then(res=> res.json())
        .then(data=> setServices(data))
   }, [])
    return (
        <div className='w-4/5 mx-auto my-5'>
            this is services {services.length}
            <div className = 'grid lg:grid-cols-3 gap-10 '>
            {
                services.map(service=> <ServiceCard
                key={service._id}
                service= {service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;