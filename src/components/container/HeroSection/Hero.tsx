import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
      
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Your Tech Partner for <span className="text-white">Smarter Growth</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          We deliver tailored IT solutions to help you scale with speed and confidence.
        </p>
        <button className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-400 transition duration-300">
          Let’s Talk
        </button>
      </div>     
      <div className="mt-12 lg:mt-0 lg:ml-8 shadow-[0px_4px_80px_20px_rgba(255,165,0,0.3)] transform -translate-y-12 rounded-xl">
        <img
          src="/images/phone-images.svg"
          alt="Phone Illustration"
          className="w-full lg:w-[500px] max-w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
