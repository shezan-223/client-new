import React from 'react';

const Loading = ({ size = "md", color = "blue" }) => {
    const sizes = {
        sm: "w-6 h-6 border-2",
        md: "w-10 h-10 border-4",
        lg: "w-16 h-16 border-8"
    };
    return (
        <div className="flex flex-col items-center justify-center p-10 space-y-4">
            <div
                className={`${sizes[size]} border-gray-200 border-t-${color}-600 rounded-full animate-spin`}
                role="status"
            >
                <span className="sr-only">Loading properties...</span>
            </div>
            <p className="text-gray-500 font-medium animate-pulse">
                Fetching listings...
            </p>
        </div>
    );
};

export default Loading;