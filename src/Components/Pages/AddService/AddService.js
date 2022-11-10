import React from 'react';
import toast from 'react-hot-toast';
import Title from '../../useTitle'

const AddService = () => {
        Title('add service')

      const handlerAddService = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photoURL = form.photourl.value
        const price = form.price.value;
        const about = form.about.value;

        const serices = {
            name, photoURL, price, about
        }

        fetch(`https://service-review-server-sand.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serices)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Service added successfully')
            }
        })
        .catch(err => console.log(err))

      }

    return (
        <div className='my-20 w-3/4 mx-auto'>
            <h2 className="text-4xl mb-5 font-semibold">Add Your Service</h2>
            <form onSubmit= {handlerAddService}>
                <div className='grid lg:grid-cols-2 gap-3'>
                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered input-primary w-full" />
                    <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered input-primary w-full " />
                    <input type="text" name='price' placeholder="Price" className="input input-bordered input-primary w-full " />
                </div>
                <textarea name='about' className="textarea textarea-primary textarea-bordered my-5  h-24 w-full" placeholder="about "></textarea>
                <button className='btn btn-gray'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;