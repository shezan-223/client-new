import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CardDetails = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { data: property, isLoading, error } = useQuery({
        queryKey: ["property", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/property/${id}`)
            return res.data
        }
    })

    if (isLoading) {
        return <div className='text-center mt-20 mb-20 text-2xl'><span className="loading loading-spinner text-info"></span></div>
    }
    if (error) {
        return <div className='text-center mt-20 mb-20 text-2xl text-red-500'><span className="loading loading-spinner text-error"></span></div>
    }


    return (
        <div className='max-w-6xl mx-auto px-4 py-10'>

            {/*image section  */}
            <div className='rounded-3xl overflow-hidden shadow-lg mb-8 flex gap-4'>
                <img src={property.imageLink} alt="" />
                <div>

                <h1 className='text-2xl font-bold mt-4'>
                    {property.propertyName}
                </h1>
                <h2>{property.description}  </h2>
                {/* eto tuk korsi */}
                </div>
            </div>


        </div>
    );
};

export default CardDetails;