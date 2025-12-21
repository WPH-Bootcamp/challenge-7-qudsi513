import React from "react";

const steps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    subtitle: "Understand Your Needs & Goals",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    subtitle: "Build a Clear, Scalable Roadmap",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    subtitle: "Craft UX That Converts",
  },
  {
    id: 4,
    title: "Development & Implementation",
    subtitle: "Deliver With Speed & Precision",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    subtitle: "Ensure Quality at Every Step",
  },
  {
    id: 6,
    title: "Launch & Growth",
    subtitle: "Scale, Measure & Improve Continuously",
  },
];

const Process = () => {
  return (
    <section className="bg-black text-white py-24 px-6 lg:px-32">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-semibold">Our Process</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line (LIMITED HEIGHT) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-px"
          style={{
            top: "24px", // setengah tinggi circle
            bottom: "24px",
          }}
        />

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%] bg-[#0b0f14] rounded-2xl p-6 border border-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-400 mt-2">{step.subtitle}</p>
              </div>

              {/* Number */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {step.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
