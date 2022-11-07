import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const {user , logOut} = useContext(AuthContext)
    const menu = <>
        <li className='text-xl font-bold'> <Link to='/'>Home</Link></li>
        <li className='text-xl font-bold'><Link to='/services'>Services</Link></li>
        {
            user?.email? 
           
            <li><button onClick={logOut} className='btn btn-ghost'><Link to = '/login'>SignOut</Link></button></li>
            : <li><Link to = '/login'>Login</Link></li>
        }
        </>
    return (
                <div className="navbar bg-green-400 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <Link to='/'><img src='' alt="" /></Link>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                    <Link to='/' className="btn">Get started</Link>
                </div>
            </div>
);
};

export default Header;