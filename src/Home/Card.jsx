import React from 'react';
import { Link } from 'react-router';

const Card = ({ item }) => {
    return (
        <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-lg mx-auto">

            {/* Image */}
            <img
                src={item.imageLink}
                alt={item.propertyName}
                className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 text-white w-full">

                <h2 className="text-2xl font-bold mb-1">
                    {item.propertyName}
                </h2>

                <p className="text-sm text-gray-200 mb-3">
                    {item.description?.slice(0, 80)}...
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                        {item.catagory}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                        {item.location}
                    </span>
                </div>
            <div>
                <p className='bg-white/20 px-3 py-1 my-1 w-fit rounded-full text-s font-bold'>{item.price}$</p>
            </div>
                {/* Button */}

                <Link to={`/property/${item._id}`} > 
                
                <button className="w-full btn btn-primary rounded-2xl">
                    View Details
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;