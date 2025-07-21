"use client";
import React from "react";
import useLenisScroll from "../components/useLenisScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#DBEAFE] text-[#020023] flex flex-col items-center justify-center py-8 pt-16 gap-2">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight text-center mt-24 md:mt-12">
          Get in Touch
        </h2>
        <p className="leading-6 mt-2 text-sm font-medium text-center">
          Have a project in mind or want to collaborate? <br />
          Reach out to us and our team will get back to you as soon as possible.
        </p>
        <form
          className="w-full max-w-4xl mx-auto flex flex-col gap-8 p-8 md:p-12 mt-8 bg-white rounded"
          autoComplete="off"
          aria-label="Contact form"
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                minLength={2}
                maxLength={50}
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-required="true"
                aria-label="Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-required="true"
                aria-label="Email"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                pattern="^\+?\d{10,15}$"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-label="Phone"
                autoComplete="tel"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="subject"
                className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. Services"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-label="Subject"
                maxLength={100}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-sm md:text-md lg:text-lg font-semibold text-black mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message..."
              required
              minLength={10}
              maxLength={1000}
              className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded resize-y"
              aria-required="true"
              aria-label="Message"
            />
          </div>
          <div className="flex w-full mt-2">
            <button
              type="submit"
              className="border rounded-xs border-[#020023] font-black flex gap-2 items-center justify-center py-2.5 px-5 cursor-pointer bg-[#020023] text-white active:scale-[0.98] hover:bg-white hover:text-[#020023] transition-all duration-300 uppercase"
              aria-label="Send Message"
            >
              Send Message <i className="ri-send-plane-fill text-lg"></i>
            </button>
          </div>
        </form>
      </section>
      <section className="w-full min-h-screen bg-white text-black flex items-center justify-center py-8"></section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7499.62238540614!2d73.806194!3d19.974441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4b70922d3b%3A0xeb2c3d42950e4216!2sWeoto%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753088924760!5m2!1sen!2sin"
        className="border-0 w-full h-[40vh] md:h-[50vh] lg:h-[70vh]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;
