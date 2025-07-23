"use client";
import React from "react";

const Insights = () => {
  return (
      <section className="w-full min-h-screen bg-[#DBEAFE] flex items-center justify-center py-16">
        <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-12 text-[#004AAD]">
              Insights
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl">
              Explore our latest thoughts, trends, and expertise in technology,
              business, and digital transformation. Stay ahead with Weoto's
              curated insights for forward-thinking organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
                <span role="img" aria-label="Tech" className="text-2xl">
                  💡
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">
                Emerging Tech Trends
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how AI, cloud, and automation are reshaping industries
                and what your business can do to stay ahead.
              </p>
              <a
                href="#"
                className="mt-4 text-[#004AAD] font-medium hover:underline text-sm"
              >
                Read more
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
                <span role="img" aria-label="Business" className="text-2xl">
                  📈
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">
                Business Agility
              </h3>
              <p className="text-gray-600 text-sm">
                Strategies and stories on how digital solutions drive agility,
                efficiency, and growth for modern enterprises.
              </p>
              <a
                href="#"
                className="mt-4 text-[#004AAD] font-medium hover:underline text-sm"
              >
                Read more
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#E0E7FF] rounded-full">
                <span role="img" aria-label="Team" className="text-2xl">
                  🤝
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004AAD]">
                Our Expertise
              </h3>
              <p className="text-gray-600 text-sm">
                Insights from our team on solving real-world challenges with
                custom software, SaaS, and cloud solutions.
              </p>
              <a
                href="#"
                className="mt-4 text-[#004AAD] font-medium hover:underline text-sm"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Insights;
