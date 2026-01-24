import React from 'react';

const MyRatingsStatic = () => {
 
    const staticReviews = [
        {
            id: 1,
            reviewerName: "Sourav Ahmed",
            propertyName: "Ocean Blue Villa",
            rating: 5,
            reviewText: "The view from the balcony was absolutely breathtaking! Highly recommended for families.",
            reviewDate: "Jan 15, 2026",
            thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 2,
            reviewerName: "Rasel",
            propertyName: "Modern City Apartment",
            rating: 4,
            reviewText: "Very central location and clean rooms. The host was very responsive.",
            reviewDate: "Jan 20, 2026",
            thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 3,
            reviewerName: "Faruk",
            propertyName: "Green Valley Cottage",
            rating: 3,
            reviewText: "Peaceful environment, but the internet connection was a bit slow.",
            reviewDate: "Jan 22, 2026",
            thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <div className="bg-[#f0f9fa] min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 uppercase tracking-wider">
                    My Ratings & Reviews
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staticReviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                            
                            {/* Property Thumbnail & Info */}
                            <div className="flex items-center gap-4 mb-5">
                                <img 
                                    src={review.thumbnail} 
                                    alt={review.propertyName} 
                                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[#C1EDF0]"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800 leading-tight">
                                        {review.propertyName}
                                    </h2>
                                    <p className="text-sm text-blue-500 font-medium">@{review.reviewerName}</p>
                                </div>
                            </div>

                            {/* Star Rating UI */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? 'text-orange-400' : 'text-gray-300'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-sm font-bold text-gray-500 ml-2">({review.rating}.0)</span>
                            </div>

                            {/* Review Text */}
                            <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                                <p className="text-gray-600 text-sm italic leading-relaxed">
                                    "{review.reviewText}"
                                </p>
                            </div>

                            {/* Review Date & Footer */}
                            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span className="text-xs font-semibold text-gray-400">
                                    Date: {review.reviewDate}
                                </span>
                                <button className="text-red-400 hover:text-red-600 text-xs font-bold uppercase tracking-tighter">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyRatingsStatic;