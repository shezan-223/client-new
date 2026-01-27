import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AllProperties = () => {
const axiosSecure=useAxiosSecure()
    const { data: allProperties = [], isLoading, isError } = useQuery({
        queryKey: ["all-property"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/allProperty");
            return Array.isArray(res.data) ? res.data : [];
        }
    });

    if (isLoading) {
        return <div className="text-center p-10 font-bold">Loading properties...</div>;
    }

    if (isError) {
        return <div className="text-center p-10 text-red-500 font-bold">Error loading properties!</div>;
    }

    return (
        <div className='bg-[#C1EDF0] min-h-screen p-5'>
            <h1 className='text-center p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold mb-4'>
                ALL PROPERTY
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 container mx-auto'>
                {
                    allProperties.length > 0 ? (
                        allProperties.map((property) => (
                            <div key={property._id} className="relative w-full h-[450] rounded-3xl overflow-hidden shadow-lg mx-auto">
                                {/* Image */}
                                <img
                                    src={property.imageLink}
                                    alt={property.propertyName}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 p-5 text-white w-full">
                                    <h2 className="text-2xl font-bold mb-1">
                                        {property.propertyName}
                                    </h2>

                                    <p className="text-sm text-gray-200 mb-3">
                                        {property.description?.slice(0, 80)}...
                                    </p>

                                    {/* Tags */}
                                    <div className="flex gap-2 mb-4">
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                                            {property.catagory}
                                        </span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                                            {property.location}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <p className='bg-white/20 px-3 py-1 w-fit rounded-full text-sm font-bold'>
                                            {property.price}$
                                        </p>
                                    </div>

                                    {/* Link and Button */}
                                    <Link to={`/property/${property._id}`}>
                                        <button className="w-full btn btn-primary rounded-2xl border-none">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center p-10 font-semibold">
                            No properties found.
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllProperties