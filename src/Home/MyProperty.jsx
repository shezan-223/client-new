import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Auth/AuthContext';
import useAxiosSecure from '../Hooks/UseAxiosSecure';

const MyProperty = () => {
    const { user } = useAuth()   
    const axiosSecure = useAxiosSecure()
    const { data: properties = [], isLoading } = useQuery({
        queryKey: ["my-properties", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-properties?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h1 className='text-center  p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold'>My Property</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-8 bg-[#C1EDF0] min-h-screen '>
            {
                properties.map((property) => (
                    <div key={property._id} className="card mt-3 mx-auto bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={property.imageLink}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{property.
                                propertyName}</h2>
                            <p>{property.description} </p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">{property.price} $</button>
                                <button className='btn   bg-[#99C2FF]' >
                                    {property.location}
                                </button>
                                <button className='btn bg-[#CCE0FF]' >
                                    {property.catagory}
                                </button>
                            </div>
                        </div>
                         <div className='grid grid-cols-3 gap-2 mx-auto my-2'>
            <button className='btn bg-[#588157] text-white shadow-2xl'>Edit</button>
            <button className='btn  bg-[#D00000] text-white shadow-2xl'>Delete</button>
            <button className='btn btn-primary shadow-2xl'>View Details</button>
           
        </div>
                    </div>
                ))
            }
        </div>

       
        </div>
    );
};

export default MyProperty;