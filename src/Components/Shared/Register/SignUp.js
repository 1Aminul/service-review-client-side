
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../../useTitle'

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    Title('sign up')
    const {handleRegister, handlerUpdateProfile} = useContext(AuthContext)
    

    const handlerSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const name = form.name.value
        const url = form.url.value
        const password = form.password.value;

        handleRegister(email, password)
        .then(res=>{
            const user = res.user
            console.log(user)
            form.reset()
            handlerUpdateProfile(name, url)
            .then(()=>{
                toast.success('use sign up and profile is updated')
            })
            .catch(err=> console.log(err))

        }).catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                
                <img src='' alt=""/>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerSubmit} className="card-body">
                <h1 className='text-4xl text-center font-extrabold'>Sign Up</h1><br />
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name='url' placeholder="PhotoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
                </div>
                   
                <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                </div>
                <p className='text-center text-xl'>Already have an account? <Link to= '/login'>Login</Link></p>
            </form>
            </div>
        </div>
 </div>
    );
};

export default SignUp;