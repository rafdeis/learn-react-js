import React from "react";
import HeroSection from "../../components/heroSection";

const Beranda = () => {
  return(
    <>
    <HeroSection/>
        <div className="text-center text-xl bg-teal-500 p-20 border mx-auto mt-10 shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-lg">
            <span className="text-2xl font-bold text-white">
                LP Web akan membantu anda untuk mendapatkan pekerjaan sesuai dengan kemampuan anda
            </span>
        </div>
        <div className="text-center mt-10">
        <span className="text-5xl font-bold text-black">
                Mengapa harus kami?
            </span>
            <p className="mt-5 text-2xl">
                Kami adalah website yang membantu anda untuk mencari pekerjaan dengan mudah
            </p>
            </div>


            <section className="grid md:grid-cols-3 gap-4 mt-4 mx-auto">
            <div className="container mx-auto flex-wrap items-center justify-start">
                <div className="mt-10 h-96 mx-4 bg-white shadow-xl rounded-lg overflow-hidden">
                <svg className="mt-10 w-36 mx-auto h-36 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                <p className="text-center text-2xl mt-10">
                        Membantu anda <br/> yang pengangguran
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex-wrap items-center justify-start">
                <div className="mt-10 h-96 mx-4  bg-white shadow-xl rounded-lg overflow-hidden">
                <svg className="mt-10 w-36 h-36 mx-auto dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                <p className="text-center text-2xl mt-10">
                        Mencarikan anda <br/> pekerjaan yang sesuai
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex-wrap items-center justify-start">
                <div className="mt-10 h-96 mx-4  bg-white shadow-xl rounded-lg overflow-hidden">
                <svg className="w-36 h-36 mt-10 mx-auto dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <p className="text-center text-2xl mt-10">
                        Proses yang <br/> sangat mudah
                    </p>
                </div>
            </div>
        </section>


        <section className="grid md:grid-cols-2 gap-10 mt-44">
            <div className="container mt-10 flex flex-wrap mx-auto">
                <img className="w-full rounded" src="https://static.republika.co.id/uploads/images/inpicture_slide/belanja-online-_181221191049-452.jpg"/>
            </div>
            <div className="mx-auto">
                <h1 className="text-4xl font-bold">
                    Cara kerja LP Web
                </h1>
                <div className="mt-20">
                    <h1 className="text-2xl text-teal-300 font-bold">
                        Lengkapi Profilemu
                    </h1>
                </div>
                <div>
                    <p className="text-xl">
                        Isi profile mu dengan baik
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">
                        Lamar Pekerjaan
                    </h1>
                </div>
                <div>
                    <p className="text-xl">
                        Rekomendasi pekerjaan 
                        <br/>
                        mempermudah kamu menemukan 
                        <br/>
                        lowongan pekerjaan
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">
                        Ikuti Wawancara
                    </h1>
                </div>
                <div>
                    <p className="text-xl">
                        Mengikuti wawancara secara
                        <br/>
                        online dengan perekrut
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">
                        Mulai Bekerja
                    </h1>
                </div>
                <div>
                    <p className="text-xl">
                        Pekerjaan menunggumu!
                    </p>
                </div>
            </div>
        </section>


        <div className="mx-auto mt-44 mb-10">
                <h1 className="text-4xl font-bold">
                    Testimoni pengguna LP Web
                </h1>
                <div className="mt-5">
                <p className="text-xl">
                    Inilah alasan mereka memilih kami
                </p>
          </div>
        </div>
        <div className="grid mb-8 mx-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
            </figcaption>    
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p className="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
            </figcaption>    
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p className="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
            </figcaption>    
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p className="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
            </figcaption>    
        </figure>
        </div>


        <div className="p-4 mt-20 mx-auto mb-20 text-center bg-white rounded-lg border shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.</p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
            </a>
            <a href="" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
            </a>
        </div>
        </div>
    </>
  )
}

export default Beranda