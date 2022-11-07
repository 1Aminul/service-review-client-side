
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import login from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {handleRegister} = useContext(AuthContext)

    const handlerSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        handleRegister(email, password)
        .then(res=>{
            const user = res.user
            console.log(user)
            form.reset()
        }).catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <h1 className='text-6xl font-extrabold'>Login</h1><br />
                <img src={login} alt=""/>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
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
                    <p>Already have an account? <Link to= '/login'>Login</Link></p>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            </div>
        </div>
 </div>
    );
};

export default SignUp;