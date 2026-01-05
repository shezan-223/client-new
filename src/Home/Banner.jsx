import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      showThumbs={false}
      showStatus={false}
      swipeable
      emulateTouch
    >
      {/* Slide 1 */}
      <div className="relative h-[420px] md:h-[500px]">
        <img
          src="https://img.freepik.com/premium-photo/hand-giving-metal-house-keys-mini-house_488220-9699.jpg?semt=ais_hybrid&w=740&q=80"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Find Your Dream Home
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            Best properties at the best price
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-[420px] md:h-[500px]">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Luxury & Modern Living
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            Comfort meets elegance
          </p>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-[420px] md:h-[500px]">
        <img
          src="https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-411.jpg?semt=ais_hybrid&w=740&q=80"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Trusted Real Estate
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            Your future starts here
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;