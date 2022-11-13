import React from "react";
import Gambar from './image/Gambar2.png'

const HeroSection = () => {
    return(
        <>
        <section className=" bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Mencari pekerjaan dengan mudah</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Di situs kami, kami akan membantu anda dalam mencarikan lowongan pekerjaan dengan mudah</p>
            
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Gambar} alt="mockup" />
            </div>                
        </div>
        </section>

        </>
    )
}

export default HeroSection