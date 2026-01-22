import React from 'react';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../Auth/AuthContext';
import { CircleUserRound } from 'lucide-react';
import { FaCircleUser } from 'react-icons/fa6';
import { MdHomeWork } from "react-icons/md";





const Navbar = () => {

   const {user,logOut}=useAuth()
   const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.success('Successfully Logout')
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };


    const getStyle = ({isActive}) => {
      return  isActive
            ? "bg-red-500 text-white hover:bg-red-600 focus:bg-red-500 " : "" 
    }

    return (
        <div className="navbar bg-[#cad0d7] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className={getStyle} to="/">Home</NavLink></li>
                        <li><NavLink className={getStyle} to="/allProperties">All Properties</NavLink></li>
                        <li><NavLink className={getStyle}  to="/addproperty">Add Properties</NavLink></li>
                        <li><NavLink className={getStyle}  to="/myproperty">My Properties</NavLink></li>
                        <li><NavLink className={getStyle}  to="/">My Ratings</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl alfa-slab-one-regular "><MdHomeWork /> Home Nest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                     <li><NavLink className={getStyle} to="/">Home</NavLink></li>
                        <li><NavLink className={getStyle} to="allProperties">All Properties</NavLink></li>
                        <li><NavLink className={getStyle} to="/addproperty">Add Properties</NavLink></li>
                        <li><NavLink className={getStyle} to="/myproperty">My Properties</NavLink></li>
                        <li><NavLink className={getStyle} to="/">My Ratings</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end ">
               { !user ?
                <Link to="/login" className="btn bg-[#415A77] text-white font-bold text-l rounded-2xl">Sign In</Link>
            :
            <div className='flex justify-between items-center gap-2'>
               <p className='text-4xl text-green-500'> 
               <FaCircleUser /></p>
                <Link onClick={handleLogOut} className='btn bg-[#ec0c0c] text-white font-bold text-l rounded-2xl'>Logout</Link>
            </div>
            
            }
            </div>
        </div>
    );
};

export default Navbar;