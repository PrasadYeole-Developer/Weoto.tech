"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useLenisScroll from "../components/useLenisScroll";
import CalendlySection from "../components/Calendly";

const Contact = () => {
  useLenisScroll();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.honeypot) {
      return;
    }
    console.log(data);
    reset();
    toast("Message sent successfully!", {
      description: "We'll be in touch shortly.",
    });
  };
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#DBEAFE] text-[#020023] flex flex-col items-center justify-center py-8 pt-16 gap-2 select-none">
        <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-center mt-24 md:mt-12">
          Get in Touch
        </h2>
        <p className="leading-6 mt-2 text-center text-base md:text-md font-medium text-gray-700 ">
          Have a project in mind or want to collaborate? <br />
          Reach out to us and our team will get back to you as soon as possible.
        </p>
        <form
          className="w-full max-w-4xl mx-auto flex flex-col gap-8 p-8 md:p-12 mt-8 bg-white rounded"
          aria-label="Contact form"
          onSubmit={handleSubmit(onSubmit)}
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
                required
                placeholder="Your Name"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-required="true"
                aria-label="Name"
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Invalid name",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-800 text-sm font-semibold mt-1">
                  {errors.name.message}
                </p>
              )}
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
                required
                placeholder="Your Email"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-required="true"
                aria-label="Email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-800 text-sm font-semibold mt-1">
                  {errors.email.message}
                </p>
              )}
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
                required
                placeholder="+91 XXXXXXXXXX"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-label="Phone"
                autoComplete="tel"
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-800 text-sm font-semibold mt-1">
                  {errors.phone.message}
                </p>
              )}
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
                required
                placeholder="e.g. Services"
                autoComplete="off"
                className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded"
                aria-label="Subject"
                {...register("subject", {
                  required: true,
                  maxLength: {
                    value: 100,
                    message: "Subject must be less than 100 characters",
                  },
                })}
              />
              {errors.subject && (
                <p className="text-red-800 text-sm font-semibold mt-1">
                  {errors.subject.message}
                </p>
              )}
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
              required
              placeholder="Your Message..."
              className="w-full border-0 px-2 py-2 text-base bg-[#DBEAFE] font-medium focus:outline-none focus:border-black transition placeholder-gray-500 placeholder:font-normal rounded resize-y"
              aria-required="true"
              autoComplete="off"
              aria-label="Message"
              {...register("message", {
                required: true,
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 1000,
                  message: "Message must be less than 1000 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-800 text-sm font-semibold mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <input
            type="text"
            name="honeypot"
            className="hidden"
            {...register("honeypot")}
          />

          <div className="flex w-full mt-2">
            <button
              type="submit"
              className="border rounded-xs border-[#020023] font-black flex gap-2 items-center justify-center py-2.5 px-5 cursor-pointer bg-[#020023] text-white active:scale-[0.98] hover:bg-white hover:text-[#020023] transition-all duration-300 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
            >
              Send Message <i className="ri-send-plane-fill text-lg"></i>
            </button>
          </div>
        </form>
      </section>
      <section className="w-full min-h-screen bg-[#020023] text-white flex items-center justify-center relative z-100 select-none">
        <CalendlySection />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7499.62238540614!2d73.806194!3d19.974441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4b70922d3b%3A0xeb2c3d42950e4216!2sWeoto%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753088924760!5m2!1sen!2sin"
        className="border-0 w-full h-[30vh] md:h-[40vh] lg:h-[50vh]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;
