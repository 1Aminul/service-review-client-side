import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Title from '../../../useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {loading} = useContext(AuthContext)
    Title('services')
   const [services, setServices] = useState([])
   useEffect(()=>{
        fetch(`https://service-review-server-sand.vercel.app/services`)
        .then(res=> res.json())
        .then(data=> {
            if(loading){
               return <div className="flex justify-center items-center">
                            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
            }
           else{
            setServices(data)
           }
        })
   }, [loading])
    return (
        <div className='w-4/5 mx-auto my-5'>
             <h2 className="text-4xl font-semibold my-5">Here is {services.length} Services</h2>
            <div className = 'grid lg:grid-cols-3 md:grid-cols-2 gap-10 '>
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