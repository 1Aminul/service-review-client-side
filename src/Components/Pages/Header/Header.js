import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/teeth.png'
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const {user , logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{

        }).catch(err => console.log(err))
    }

    const menu = <>
        <li className='text-xl font-bold'> <Link to='/'>Home</Link></li>
        <li className='text-xl font-bold'><Link to='/services'>Services</Link></li>
        <li className='text-xl font-bold'><Link to='/review'>My Reviews</Link></li>
        <li className='text-xl font-bold'><Link to='/addService'>Add Service</Link></li>
        <li className='text-xl font-bold'><Link to='/blog'>Blog</Link></li>
      
        {
            user?.email? 
           
            <li><button onClick={handleLogOut} className='btn btn-ghost text-xl font-bold'><Link to = '/login'>SignOut</Link></button></li>
            : <li><Link to = '/login'>Login</Link></li>
        }
        </>
    return (
                <div className="navbar bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <Link to='/'><img src={logo} className="w-10" alt="this is logo" /></Link>
                        <h2 className="text-xl">Dentist</h2>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-400 text-white rounded-box w-52">
                        {menu}
                    </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <Link to='/' className="btn">Take Appointment</Link>
                </div>
            </div>
);
};

export default Header;