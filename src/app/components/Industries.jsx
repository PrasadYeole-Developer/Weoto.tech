import React from "react";

const Industries = () => {
  return (
    <section className="w-full min-h-screen bg-[#DBEAFE] flex items-center justify-center py-16">
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#004AAD]">Industries We Serve</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl">
            Weoto empowers businesses across diverse industries with tailored software solutions, helping them gain competitiveness and agility in a rapidly evolving digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
              <span role="img" aria-label="Retail" className="text-3xl">🛒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">Retail & Ecommerce</h3>
            <p className="text-gray-600 text-sm text-center">
              Scalable ecommerce platforms, inventory management, and seamless customer experiences for B2B and B2C.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
              <span role="img" aria-label="Manufacturing" className="text-3xl">🏭</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">Manufacturing</h3>
            <p className="text-gray-600 text-sm text-center">
              Custom ERP, supply chain optimization, and automation to streamline operations and boost productivity.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
              <span role="img" aria-label="Healthcare" className="text-3xl">💊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">Healthcare</h3>
            <p className="text-gray-600 text-sm text-center">
              Secure, compliant solutions for patient management, telemedicine, and digital health transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
