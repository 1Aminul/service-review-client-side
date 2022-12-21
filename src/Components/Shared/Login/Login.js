import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import Title from '../../useTitle';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('')
    const {handleLogin, googleSignIn} = useContext(AuthContext)
    let navigate =  useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    Title('Login')

    const handlerSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        
        
        handleLogin(email, password)
        .then(res=>{
            const user = res.user
            console.log(user)
            form.reset()
           
             navigate(from, { replace: true })
        }).catch(e => setError(e.message))
    }

      const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user
            console.log(user);
        }).catch(err=> console.log(err))
      }


    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center mr-16 lg:text-left">
                       
                        <img src='' alt=""/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
                <div  className="card-body">
                    <form onSubmit={handlerSubmit}>
                        <h1 className='text-4xl text-center font-extrabold'>Login</h1><br />
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
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-error'>{error}</p>
                       
                        <br />
                        
                    </form>
                    <div className='btn btn-success text-xl text-white'><button onClick={handleGoogleSignIn}><FaGoogle className='text-xl inline mr-2 text-primary'></FaGoogle>Google Sign</button></div>
                    </div>
                    <p className='text-center text-xl mb-5'>Don't have an account? <Link className='text-red-600' to= '/signup'>Sign Up</Link></p>
                    </div>
                </div>
         </div>
    );
};

export default Login;