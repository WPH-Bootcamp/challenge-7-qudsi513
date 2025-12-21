import React from 'react';

const Stats = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">End-to-End IT Solutions That Drive Results</h2>
        <p className="text-lg text-gray-300 mt-4">From strategy to execution, we deliver solutions that grow your business.</p>
      </div>

      <div className="flex justify-center space-x-8">      
        <div className="flex flex-col items-center">
          <div className="bg-[#0A0D12] text-orange-500 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-xl">
            <span className="text-4xl font-bold">50+</span>
            <p className="text-white text-lg mt-2">Projects Delivered</p> 
          </div>
        </div>        
        <div className="flex flex-col items-center">
          <div className="bg-[#0A0D12] text-orange-500 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-xl">
            <span className="text-4xl font-bold">5+</span>
            <p className="text-white text-lg mt-2">Years of Experience</p> 
          </div>
        </div>        
        <div className="flex flex-col items-center">
          <div className="bg-[#0A0D12] text-orange-500 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-xl">
            <span className="text-4xl font-bold">10+</span>
            <p className="text-white text-lg mt-2">Industry Awards Won</p> 
          </div>
        </div>       
        <div className="flex flex-col items-center">
          <div className="bg-[#0A0D12] text-orange-500 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-xl">
            <span className="text-4xl font-bold">100%</span>
            <p className="text-white text-lg mt-2">Client Satisfaction Rate</p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
