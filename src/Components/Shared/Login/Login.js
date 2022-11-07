import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate, useLocation} from 'react-router-dom';


const Login = () => {
    const {handleLogin} = useContext(AuthContext)
    let navigate =  useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

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
            // const currentuser = {
            //     email: user.email
            // }
            // //get token
            // fetch('http://localhost:5000/jwt', {
            //     method: "POST",
            //     headers:{
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(currentuser)
            // })
            // .then(res=> res.json())
            // .then(data=> {
            //     console.log(data);
            //     localStorage.setItem('genius-Token', data.token)
            // })

             navigate(from, { replace: true })
        }).catch(e => console.error(e))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center mr-16 lg:text-left">
                       
                        <img src='' alt=""/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
                    <form onSubmit={handlerSubmit} className="card-body">
                        <h1 className='text-6xl text-center font-extrabold'>Login</h1><br />
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
                        <br />
                        <p className='text-center text-xl'>Don't have an account? <Link className='text-red-600' to= '/signup'>Sign Up</Link></p>
                    </form>
                    </div>
                </div>
         </div>
    );
};

export default Login;