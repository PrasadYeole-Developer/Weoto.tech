import React from "react";

const Careers = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16">
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 mt-12 text-[#004AAD]">Careers</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl">
            We are always looking for talented individuals to join our team. If you are interested in working with us, please send us an email.
          </p>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
                  <span role="img" aria-label="Software Engineer" className="text-3xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">Software Engineer</h3>
            <p className="text-gray-600 text-sm text-center">
                We are looking for a Software Engineer with a passion for building innovative and high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
