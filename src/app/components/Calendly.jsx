"use client";
import { InlineWidget } from "react-calendly";

const CalendlySection = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-5xl bg-white/90 rounded-xl shadow-xl p-8 md:p-12 flex flex-col items-center gap-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#020023] text-center mb-2">
          Schedule a Call
        </h2>
        <p className="text-base md:text-md font-medium text-gray-700 text-center mb-8 leading-6">
          Book a free 1:1 call to discuss your project, idea, or collaboration.
          <br />
          Pick a time that works for you!
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-xl min-h-[600px] rounded-xl shadow-lg bg-white">
            <InlineWidget url="https://calendly.com/YOUR_USERNAME" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
