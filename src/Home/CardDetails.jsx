import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CardDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: property, isLoading, error } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/property/${id}`);
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center py-32">
                <span className="loading loading-spinner loading-lg text-info"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-32 text-red-500 text-xl">
                Failed to load property details
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-10">

                {/* Image Section */}
                <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                        src={property.imageLink}
                        alt={property.propertyName}
                        className="w-full h-105 object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-between">

                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            {property.propertyName}
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            {property.description}
                        </p>

                        <div className="flex gap-3 flex-wrap mb-6">
                            <span className="badge badge-info text-white px-4 py-3">
                                📍 {property.location}
                            </span>

                            <span className="badge badge-secondary text-white px-4 py-3">
                                🏷 {property.catagory}
                            </span>
                        </div>
                    </div>

                    {/* Price & Owner */}
                    <div className="bg-base-100 rounded-2xl p-6 shadow-md">
                        <p className="text-3xl font-bold text-primary mb-4">
                            ${property.price}
                        </p>

                        <div className="text-gray-700 space-y-1">
                            <p><strong>Owner:</strong> {property.yourName}</p>
                            <p><strong>Email:</strong> {property.email}</p>
                        </div>

                        <button className="btn btn-primary w-full mt-6 rounded-xl">
                            Contact Owner
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;