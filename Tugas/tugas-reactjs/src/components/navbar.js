import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <>
        <div className="w-3/4 mx-auto mt-5">
            <nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kelas ReactJS</span>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link 
                            to={'/'}
                            className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to={'/tugas15'}
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Tugas15
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div> 
        </>
    )
}

export default Navbar