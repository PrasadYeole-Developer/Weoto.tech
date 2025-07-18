import React from "react";

const VisionMission = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16">
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 mt-12 text-[#004AAD]">
            Vision and Mission
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl">
            Our vision is to be a leading software company that provides
            innovative and high-quality software solutions to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
              <span role="img" aria-label="Vision" className="text-3xl">
                🎯
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">
              Vision
            </h3>
            <p className="text-gray-600 text-sm text-center">
              To be a leading software company that provides innovative and
              high-quality software solutions to our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
