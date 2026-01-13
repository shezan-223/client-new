import { Description, Field, Input, Label } from '@headlessui/react';
import React from 'react';
import { useAuth } from './Auth/AuthContext';
import { FaArrowDown } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import useAxiosSecure from './Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const AddProperty = () => {
    const { user } = useAuth()

    const { register, handleSubmit, watch, reset } = useForm()
    const axiosSecure = useAxiosSecure()

    const propertySubmit = async (data) => {

        const propertyData = {
            propertyName: data.propertyName,
            description: data.description,
            catagory: data.catagory,
            price: data.price,
            location: data.location,
            imageLink: data.imageLink,
            email: data.email,
            yourName: data.yourName,
        }
        try {
            const res = await axiosSecure.post("/properties", propertyData)

            if (res.data) {
               Swal.fire('Success', 'Property added successfully', 'success');
            }
        reset()  
        
        }
         catch (error) {
            console.log(error);
            Swal.fire('Error', 'Failed to add property', 'error');
            }


        }
    return (
            <form onSubmit={handleSubmit(propertySubmit)}  className='bg-[#C1EDF0]   min-h-screen'>
                <h1 className='text-center  p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold'  >Add Property Info</h1>

                <div className='flex justify-between items-center gap-2 container mx-auto p-10'>

                    <section className='left  min-w-1/2 inline-block' >
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Property Name</legend>
                            <input {...register("propertyName")} type="text" className="input w-full" placeholder="property-name" />

                        </fieldset>
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Description</legend>
                            <input {...register("description")} type="text" className="input w-full" placeholder="Description" />

                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Catagory</legend>
                            <select {...register("catagory")} defaultValue="Pick a catagory " className="select w-full">
                                <option disabled={true}>Pick a Catagory</option>
                                <option>Rent</option>
                                <option>Sale</option>
                                <option>Commercial</option>
                                <option>Land</option>
                            </select>

                        </fieldset>
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Price</legend>
                            <input {...register("price")} type="number" className="input w-full" placeholder="Price" />

                        </fieldset>


                    </section>

                    <section className='right min-w-1/2 inline-block'>


                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Location</legend>
                            <input {...register("location")} type="text" className="input w-full" placeholder="Location" />

                        </fieldset>
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Image Link</legend>
                            <input {...register('imageLink')} type="text" className="input w-full" placeholder="Iamge Link" />

                        </fieldset>
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">User Email</legend>
                            <input {...register("email")} type="text" defaultValue={user?.email} className="input w-full" placeholder="" />

                        </fieldset>
                        <fieldset className="fieldset  ">
                            <legend className="fieldset-legend">Your Name</legend>
                            <input {...register("yourName")} type="text" className="input w-full" placeholder="Your Name" />

                        </fieldset>



                    </section>



                </div>
                <div className="flex justify-center pb-10">
                    <button className="btn w-64 bg-[#415A77] text-white py-3 rounded-2xl text-lg font-semibold">
                        Submit Here
                    </button>
                </div>

            </form>
        );
    };

    export default AddProperty;