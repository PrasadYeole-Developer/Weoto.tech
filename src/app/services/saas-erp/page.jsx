import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import useLenisScroll from '@/app/components/useLenisScroll'

const SaaSERP = () => {
  useLenisScroll();
  return (
    <>
    <Navbar />
    <section className="w-full min-h-screen bg-[#DBEAFE] text-black flex items-center justify-center py-16">
        <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
            
        </div>
    </section>
    <Footer />
    </>
  )
}

export default SaaSERP;