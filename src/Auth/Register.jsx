import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from './AuthContext';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Register = () => {

const {registerUser,user }=useAuth()
const navigate =useNavigate()
 console.log(user);

const {register,handleSubmit,formState:{errors}}=useForm()

const handleRegister =async (data)=>{
  try {
        await registerUser(data.email, data.password);
        console.log("Success:", data);
       Swal.fire({
  title: "Successfully Logged In",
  icon: "success",
  draggable: true
});
        navigate("/");
    } catch (error) {
        console.error("Registration failed:", error.message);
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text:"Registration fail ",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        // You can show this error to the user later
    }

}

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-vector/modern-city-skyline_617585-2971.jpg?semt=ais_hybrid&w=740&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* The Overlay: Darkens the image so the white text/cards pop */}
            <div className="hero-overlay bg-opacity-60 "></div>

            <div className="hero-content flex-col lg:flex-row-reverse text-white">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register  Now!</h1>
                    <p className="py-6 text-2xl">
                        Trusted Real Estate
                        Your future starts here
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-black">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body bg-[#C1EDF0] rounded-xl">

                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input {...register("email",{required:"email is required"})} type="email" className="input input-bordered" placeholder="Email" />

                        {
                            errors.email && <span className='text-red-500  text-xs'>{errors.email.message}</span>
                        }


                            <label className="label">Password</label>
                            <input {...register("password",{required:"password is required"})} type="password" className="input input-bordered" placeholder="Password" />


                             {
                            errors.password && <span className='text-red-500  text-xs'>{errors.password.message}</span>
                        }

                            <div className=' '>
                                <p>Already  have an account? Please  <Link className='text-red-500' to="/login" >Login</Link></p>





                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;